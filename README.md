# CS2 DemoTracer · Sig & Schema

CS2 **1.41.9.3** · Windows x64 · Build **26281801** · 2026-10-29T10:54:35.338Z

| 源码 | Sig 正常 | Sig 失配 | Schema 正常 | Schema 失配 |
| --- | ---: | ---: | ---: | ---: |
| [v1.6.4](https://github.com/unicbm/demotracer/tree/e048c080bcb7b49a6c42138d7ce070abf52bd095) | 27 | 4 | 53 | 0 |
| [v1.6.5](https://github.com/unicbm/demotracer/tree/be9c22e0554e347eabe3e5eae2ffad82e1b28e77) | 31 | 0 | 53 | 0 |
| [main](https://github.com/unicbm/demotracer/tree/be9c22e0554e347eabe3e5eae2ffad82e1b28e77) | 31 | 0 | 53 | 0 |

## Sig

### dtr-controller

| 检查项 | v1.6.4 | v1.6.5 | main |
| --- | --- | --- | --- |
| [BuyState::OnUpdate](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CBaseEntity::SetAbsOrigin](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CBaseEntity::SetAbsVelocity](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CBaseEntity::SetMoveType](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CBasePlayerPawn::GetEyeAngles](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSBot::EquipBestWeapon](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSBot::EquipPistol](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSBot::InvalidatePath](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSBot::IsVisiblePlayer](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSBot::IsVisiblePos](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSBot::LadderStateUpdate](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSBot::Update](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSBot::UpdateLookAngles](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSBot::Upkeep](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSPlayerPawn::SetEyeAngles](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSPlayer_MovementServices::PhysicsSimulate](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSPlayer_MovementServices::ProcessMovement](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSPlayer_WeaponServices::GetSlot](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSPlayer_WeaponServices::SelectItem](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ | ✅ | ✅ |

### dtr-hider

| 检查项 | v1.6.4 | v1.6.5 | main |
| --- | --- | --- | --- |
| [CCSBotManager::MaintainBotQuota](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ | ✅ | ✅ |
| [CCSPlayerController::HandleCommand_JoinTeam](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ | ✅ | ✅ |
| [CNetworkGameServer::PackEntities](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ | ✅ | ✅ |
| [UTIL_Remove](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ | ✅ | ✅ |

### 投掷物

| 检查项 | v1.6.4 | v1.6.5 | main |
| --- | --- | --- | --- |
| [Projectile entry](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/config/demotracer-native.json) | ❌ | ✅ | ✅ |
| [Projectile function body](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/config/demotracer-native.json) | ❌ | ✅ | ✅ |
| [Projectile physics signature](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ | ✅ | ✅ |
| [Projectile virtual references](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/config/demotracer-native.json) | ❌ | ✅ | ✅ |
| [Server image fingerprint](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/config/demotracer-native.json) | ❌ | ✅ | ✅ |

### BotRandomizer

| 检查项 | v1.6.4 | v1.6.5 | main |
| --- | --- | --- | --- |
| [BotRandomizer: itemViewConstructor](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ | ✅ | ✅ |
| [BotRandomizer: itemViewDestructor](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ | ✅ | ✅ |
| [BotRandomizer: writer](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ | ✅ | ✅ |

## Schema

### 字段

| 类 | 字段 | v1.6.4 | v1.6.5 | main |
| --- | --- | --- | --- | --- |
| CAttributeContainer | m_Item | ✅ | ✅ | ✅ |
| CBaseEntity | m_CBodyComponent | ✅ | ✅ | ✅ |
| CBaseEntity | m_MoveType | ✅ | ✅ | ✅ |
| CBaseEntity | m_fFlags | ✅ | ✅ | ✅ |
| CBaseEntity | m_iTeamNum | ✅ | ✅ | ✅ |
| CBaseEntity | m_lifeState | ✅ | ✅ | ✅ |
| CBaseEntity | m_nActualMoveType | ✅ | ✅ | ✅ |
| CBaseEntity | m_vecAbsVelocity | ✅ | ✅ | ✅ |
| CBasePlayerController | m_hPawn | ✅ | ✅ | ✅ |
| CBasePlayerPawn | m_hController | ✅ | ✅ | ✅ |
| CBasePlayerPawn | m_pItemServices | ✅ | ✅ | ✅ |
| CBasePlayerPawn | m_pMovementServices | ✅ | ✅ | ✅ |
| CBasePlayerPawn | m_pWeaponServices | ✅ | ✅ | ✅ |
| CBasePlayerPawn | v_angle | ✅ | ✅ | ✅ |
| CBasePlayerPawn | v_anglePrevious | ✅ | ✅ | ✅ |
| CBodyComponent | m_pSceneNode | ✅ | ✅ | ✅ |
| CBot | m_pPlayer | ✅ | ✅ | ✅ |
| CCSBot | m_currentEnemyAcquireTimestamp | ✅ | ✅ | ✅ |
| CCSBot | m_enemy | ✅ | ✅ | ✅ |
| CCSBot | m_firstSawEnemyTimestamp | ✅ | ✅ | ✅ |
| CCSBot | m_isEnemyVisible | ✅ | ✅ | ✅ |
| CCSBot | m_isLastEnemyDead | ✅ | ✅ | ✅ |
| CCSBot | m_lastSawEnemyTimestamp | ✅ | ✅ | ✅ |
| CCSBot | m_nearbyEnemyCount | ✅ | ✅ | ✅ |
| CCSBot | m_visibleEnemyParts | ✅ | ✅ | ✅ |
| CCSPlayerController | m_bControllingBot | ✅ | ✅ | ✅ |
| CCSPlayerController | m_bPawnHasDefuser | ✅ | ✅ | ✅ |
| CCSPlayerController | m_bPawnHasHelmet | ✅ | ✅ | ✅ |
| CCSPlayerController | m_hPlayerPawn | ✅ | ✅ | ✅ |
| CCSPlayerController | m_iPawnArmor | ✅ | ✅ | ✅ |
| CCSPlayerController | m_iPing | ✅ | ✅ | ✅ |
| CCSPlayerController | m_szCrosshairCodes | ✅ | ✅ | ✅ |
| CCSPlayerController_InGameMoneyServices | m_iAccount | ✅ | ✅ | ✅ |
| CCSPlayerPawn | m_ArmorValue | ✅ | ✅ | ✅ |
| CCSPlayerPawnBase | m_flIdleTimeSinceLastAction | ✅ | ✅ | ✅ |
| CCSPlayerPawnBase | m_hOriginalController | ✅ | ✅ | ✅ |
| CCSPlayer_ItemServices | m_bHasDefuser | ✅ | ✅ | ✅ |
| CCSPlayer_ItemServices | m_bHasHelmet | ✅ | ✅ | ✅ |
| CCSPlayer_MovementServices | m_bDesiresDuck | ✅ | ✅ | ✅ |
| CCSPlayer_MovementServices | m_bDucked | ✅ | ✅ | ✅ |
| CCSPlayer_MovementServices | m_bDucking | ✅ | ✅ | ✅ |
| CCSPlayer_MovementServices | m_flDuckAmount | ✅ | ✅ | ✅ |
| CCSPlayer_MovementServices | m_flDuckSpeed | ✅ | ✅ | ✅ |
| CCSPlayer_MovementServices | m_vecLadderNormal | ✅ | ✅ | ✅ |
| CEconEntity | m_AttributeManager | ✅ | ✅ | ✅ |
| CEconItemView | m_iItemDefinitionIndex | ✅ | ✅ | ✅ |
| CEntityInstance | m_pEntity | ✅ | ✅ | ✅ |
| CGameSceneNode | m_vecAbsOrigin | ✅ | ✅ | ✅ |
| CInButtonState | m_pButtonStates | ✅ | ✅ | ✅ |
| CPlayerControllerComponent | __m_pChainEntity | ✅ | ✅ | ✅ |
| CPlayer_MovementServices | m_nButtons | ✅ | ✅ | ✅ |
| CPlayer_MovementServices | m_vecOldViewAngles | ✅ | ✅ | ✅ |
| CPlayer_WeaponServices | m_hActiveWeapon | ✅ | ✅ | ✅ |
