# CS2 DemoTracer · Sig & Schema

CS2 **1.41.9.6** · Windows x64 · Build **26445667** · 2026-11-07T15:13:48.183Z

| 源码 | Sig 正常 | Sig 失配 | Schema 正常 | Schema 失配 |
| --- | ---: | ---: | ---: | ---: |
| [v1.6.8](https://github.com/unicbm/demotracer/tree/99979480921216ed77017fed633f123010c47dfb) | 26 | 0 | 50 | 0 |

## Sig

### dtr-controller

| 检查项 | 结果 |
| --- | --- |
| [BuyState::OnUpdate](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CBaseEntity::SetAbsOrigin](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CBaseEntity::SetAbsVelocity](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CBaseEntity::SetMoveType](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CBasePlayerPawn::GetEyeAngles](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSBot::EquipBestWeapon](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSBot::EquipPistol](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSBot::InvalidatePath](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSBot::IsVisiblePlayer](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSBot::IsVisiblePos](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSBot::LadderStateUpdate](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSBot::Update](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSBot::UpdateLookAngles](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSBot::Upkeep](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSPlayerPawn::SetEyeAngles](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSPlayer_MovementServices::PhysicsSimulate](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSPlayer_MovementServices::ProcessMovement](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSPlayer_WeaponServices::GetSlot](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |
| [CCSPlayer_WeaponServices::SelectItem](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ |

### dtr-hider

| 检查项 | 结果 |
| --- | --- |
| [CCSBotManager::MaintainBotQuota](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ |
| [CCSPlayerController::HandleCommand_JoinTeam](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ |
| [CNetworkGameServer::PackEntities](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ |
| [UTIL_Remove](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ |

### BotRandomizer

| 检查项 | 结果 |
| --- | --- |
| [BotRandomizer: itemViewConstructor](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ |
| [BotRandomizer: itemViewDestructor](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ |
| [BotRandomizer: writer](https://github.com/unicbm/demotracer/blob/99979480921216ed77017fed633f123010c47dfb/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ |

## Schema

数据源：[CS2OpenDev SchemaTracker](https://github.com/CS2OpenDev/CS2OpenDev-SchemaTracker/tree/5371a486a8db2526a01bd32223a26390443d606a) · 已核对 Build、manifest 和 DLL SHA-256。

### 字段

| 类 | 字段 | 结果 |
| --- | --- | --- |
| CAttributeContainer | m_Item | ✅ |
| CBaseEntity | m_MoveType | ✅ |
| CBaseEntity | m_fFlags | ✅ |
| CBaseEntity | m_iTeamNum | ✅ |
| CBaseEntity | m_lifeState | ✅ |
| CBaseEntity | m_nActualMoveType | ✅ |
| CBaseEntity | m_vecAbsVelocity | ✅ |
| CBasePlayerController | m_hPawn | ✅ |
| CBasePlayerPawn | m_hController | ✅ |
| CBasePlayerPawn | m_pItemServices | ✅ |
| CBasePlayerPawn | m_pMovementServices | ✅ |
| CBasePlayerPawn | m_pWeaponServices | ✅ |
| CBasePlayerPawn | v_angle | ✅ |
| CBasePlayerPawn | v_anglePrevious | ✅ |
| CBot | m_pPlayer | ✅ |
| CCSBot | m_currentEnemyAcquireTimestamp | ✅ |
| CCSBot | m_enemy | ✅ |
| CCSBot | m_firstSawEnemyTimestamp | ✅ |
| CCSBot | m_isEnemyVisible | ✅ |
| CCSBot | m_isLastEnemyDead | ✅ |
| CCSBot | m_lastSawEnemyTimestamp | ✅ |
| CCSBot | m_nearbyEnemyCount | ✅ |
| CCSBot | m_visibleEnemyParts | ✅ |
| CCSPlayerController | m_bControllingBot | ✅ |
| CCSPlayerController | m_bPawnHasDefuser | ✅ |
| CCSPlayerController | m_bPawnHasHelmet | ✅ |
| CCSPlayerController | m_hPlayerPawn | ✅ |
| CCSPlayerController | m_iPawnArmor | ✅ |
| CCSPlayerController | m_iPing | ✅ |
| CCSPlayerController | m_szCrosshairCodes | ✅ |
| CCSPlayerController_InGameMoneyServices | m_iAccount | ✅ |
| CCSPlayerPawn | m_ArmorValue | ✅ |
| CCSPlayerPawnBase | m_flIdleTimeSinceLastAction | ✅ |
| CCSPlayerPawnBase | m_hOriginalController | ✅ |
| CCSPlayer_ItemServices | m_bHasDefuser | ✅ |
| CCSPlayer_ItemServices | m_bHasHelmet | ✅ |
| CCSPlayer_MovementServices | m_bDesiresDuck | ✅ |
| CCSPlayer_MovementServices | m_bDucked | ✅ |
| CCSPlayer_MovementServices | m_bDucking | ✅ |
| CCSPlayer_MovementServices | m_flDuckAmount | ✅ |
| CCSPlayer_MovementServices | m_flDuckSpeed | ✅ |
| CCSPlayer_MovementServices | m_vecLadderNormal | ✅ |
| CEconEntity | m_AttributeManager | ✅ |
| CEconItemView | m_iItemDefinitionIndex | ✅ |
| CEntityInstance | m_pEntity | ✅ |
| CInButtonState | m_pButtonStates | ✅ |
| CPlayerControllerComponent | __m_pChainEntity | ✅ |
| CPlayer_MovementServices | m_nButtons | ✅ |
| CPlayer_MovementServices | m_vecOldViewAngles | ✅ |
| CPlayer_WeaponServices | m_hActiveWeapon | ✅ |

<!-- checked:26445667:6679288287140932208:3019944380727688040:99979480921216ed77017fed633f123010c47dfb:5371a486a8db2526a01bd32223a26390443d606a:light-v1 -->
