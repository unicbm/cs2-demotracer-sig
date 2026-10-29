// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 unicbm.
#include <Windows.h>
#include <schemasystem/schemasystem.h>
#include <cstring>
// Same live Schema interface used by DemoTracer; no entity writes or hooks.
extern "C" __declspec(dllexport) int QueryField(const char* cls, const char* member, int* offset, int* size) {
    auto module = GetModuleHandleA("schemasystem.dll");
    if (!module) return -2;
    using Factory = void* (*)(const char*, int*);
    auto factory = reinterpret_cast<Factory>(GetProcAddress(module, "CreateInterface"));
    if (!factory) return -2;
    auto system = static_cast<ISchemaSystem*>(factory(SCHEMASYSTEM_INTERFACE_VERSION, nullptr));
    if (!system || !system->SchemaSystemIsReady()) return -2;
    auto server = system->FindTypeScopeForModule("server.dll", nullptr);
    if (!server) return -2;
    CSchemaClassInfo* info = server->FindDeclaredClass(cls).Get();
    auto entity = system->FindTypeScopeForModule("entity2.dll", nullptr);
    if (!info && entity) info = entity->FindDeclaredClass(cls).Get();
    auto global = system->GlobalTypeScope();
    if (!info && global) info = global->FindDeclaredClass(cls).Get();
    if (!info) return -1;
    *size = info->m_nSize;
    for (uint16 i = 0; info->m_pFields && i < info->m_nFieldCount; ++i) {
        const auto& field = info->m_pFields[i];
        if (field.m_pszName && std::strcmp(field.m_pszName, member) == 0) {
            *offset = field.m_nSingleInheritanceOffset;
            return *offset >= 0 && *offset < *size ? 1 : -4;
        }
    }
    return -3;
}
