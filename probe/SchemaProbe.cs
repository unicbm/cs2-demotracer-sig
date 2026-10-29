// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 unicbm.
using System.Runtime.InteropServices;
using System.Text.Json;
using CounterStrikeSharp.API.Core;
public sealed class SchemaProbe : BasePlugin {
    public override string ModuleName => "SchemaProbe";
    public override string ModuleVersion => "1.0.0";
    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate int Query([MarshalAs(UnmanagedType.LPStr)] string cls, [MarshalAs(UnmanagedType.LPStr)] string field, out int offset, out int size);
    public override void Load(bool hotReload) { AddTimer(5, Collect); }
    private void Collect() {
        var library = NativeLibrary.Load(Path.Combine(ModuleDirectory, "schema_probe.dll"));
        try {
            var query = Marshal.GetDelegateForFunctionPointer<Query>(NativeLibrary.GetExport(library, "QueryField"));
            if (query("__DtrMissingClass", "__missing", out _, out _) != -1 || query("CBaseEntity", "__DtrMissingField", out _, out _) != -3)
                throw new InvalidOperationException("Schema control queries failed");
            var requests = JsonSerializer.Deserialize<string[][]>(File.ReadAllText(Path.Combine(ModuleDirectory, "requests.json")))!;
            var rows = requests.Select(r => { var status = query(r[0], r[1], out var offset, out var size); return new { className=r[0], fieldName=r[1], status, offset, classSize=size }; }).ToArray();
            if (rows.Any(r => r.status == -2)) throw new InvalidOperationException("Schema not ready");
            File.WriteAllText(Path.Combine(ModuleDirectory, "result.json"), JsonSerializer.Serialize(rows));
        } finally { NativeLibrary.Free(library); }
    }
}
