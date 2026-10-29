# 签名与 Schema 核查

CS2 1.41.9.3 · Windows x64 · Build 26281801 · 2026-10-29T10:54:35.338Z

| 源码版本 | 匹配 | 失配 | 未核查 |
| --- | ---: | ---: | ---: |
| [v1.6.4](https://github.com/unicbm/demotracer/tree/e048c080bcb7b49a6c42138d7ce070abf52bd095) | 80 | 4 | 33 |
| [v1.6.5](https://github.com/unicbm/demotracer/tree/be9c22e0554e347eabe3e5eae2ffad82e1b28e77) | 84 | 0 | 33 |
| [main](https://github.com/unicbm/demotracer/tree/be9c22e0554e347eabe3e5eae2ffad82e1b28e77) | 84 | 0 | 33 |

## v1.6.4

| 检查项 | 结果 |
| --- | --- |
| [CCSBot::EquipBestWeapon](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::EquipPistol](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_WeaponServices::SelectItem](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_WeaponServices::GetSlot](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::Update](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::Upkeep](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::IsVisiblePos](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::IsVisiblePlayer](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [BuyState::OnUpdate](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [BuyState::InitialDelay (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [BuyState::DoneBuying (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CCSBot::UpdateLookAngles](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayerPawn::SetEyeAngles](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBasePlayerPawn::GetEyeAngles](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::LadderStateUpdate](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::InvalidatePath](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBaseEntity::SetMoveType](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBaseEntity::SetAbsOrigin](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBaseEntity::SetAbsVelocity](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_MovementServices::ProcessMovement](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_MovementServices::PhysicsSimulate](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CEntityIdentity::EHandle (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CCSPlayer_MovementServices::Pawn (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::ForwardMove (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::SideMove (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::UpMove (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::Velocity (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::AbsOrigin (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [vtidx::PlayerRunCommand (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [vtidx::SetupMove (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [vtidx::FinishMove (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [GameResourceServiceServer::EntitySystem (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CEntitySystem::IdentityChunks (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::Size (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [UTIL_Remove](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CCSBotManager::MaintainBotQuota](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CCSPlayerController::HandleCommand_JoinTeam](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CNetworkGameServer::PackEntities](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CServerSideClient::SetName (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CNetworkGameServerBase::UserInfoChanged (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [GameResourceServiceServer::m_pEntitySystem (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntitySystem::m_EntityList (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::Size (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::m_pInstance (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::m_designerName (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CNetworkGameServerBase::m_Clients (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CBasePlayerController::FakeClientFlags (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_Name (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_nEntityIndex (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_NetChannel (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_nConnectionTypeFlags (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_bFakePlayer (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_UserID (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_SteamID (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_SteamIDMirror (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_bIsHLTV (layout)](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [Projectile physics signature](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [Server image fingerprint](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/config/demotracer-native.json) | ❌ 失配 |
| [Projectile entry](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/config/demotracer-native.json) | ❌ 失配 |
| [Projectile function body](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/config/demotracer-native.json) | ❌ 失配 |
| [Projectile virtual references](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/config/demotracer-native.json) | ❌ 失配 |
| [BotRandomizer: writer](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ 匹配 |
| [BotRandomizer: itemViewDestructor](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ 匹配 |
| [BotRandomizer: itemViewConstructor](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_bControllingBot](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/src/DemoTracer/Lifecycle/DemoTracerPlugin.cs) | ✅ 匹配 |
| [Schema: CBot::m_pPlayer](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_enemy](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_isEnemyVisible](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_visibleEnemyParts](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_lastSawEnemyTimestamp](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_firstSawEnemyTimestamp](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_currentEnemyAcquireTimestamp](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_isLastEnemyDead](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_nearbyEnemyCount](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CEntityInstance::m_pEntity](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_lifeState](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_MoveType](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_nActualMoveType](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_fFlags](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_vecAbsVelocity](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_CBodyComponent](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBodyComponent::m_pSceneNode](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CGameSceneNode::m_vecAbsOrigin](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_pWeaponServices](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_pMovementServices](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_pItemServices](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_hController](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerPawnBase::m_hOriginalController](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::v_angle](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::v_anglePrevious](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerPawn::m_ArmorValue](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_ItemServices::m_bHasHelmet](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_ItemServices::m_bHasDefuser](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_iPawnArmor](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_bPawnHasHelmet](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_bPawnHasDefuser](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CPlayer_WeaponServices::m_hActiveWeapon](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CPlayer_MovementServices::m_vecOldViewAngles](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_vecLadderNormal](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_bDucked](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_flDuckAmount](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_flDuckSpeed](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_bDesiresDuck](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_bDucking](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CEconEntity::m_AttributeManager](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CAttributeContainer::m_Item](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CEconItemView::m_iItemDefinitionIndex](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CPlayer_MovementServices::m_nButtons](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CInButtonState::m_pButtonStates](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerController::m_hPawn](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerPawnBase::m_flIdleTimeSinceLastAction](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_hPlayerPawn](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_szCrosshairCodes](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_iPing](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_iTeamNum](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController_InGameMoneyServices::m_iAccount](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/src/DemoTracer/Playback/Inventory/DemoTracerReplayLoadout.cs) | ✅ 匹配 |
| [Schema: CPlayerControllerComponent::__m_pChainEntity](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/plugins/DemoTracer/src/DemoTracer/Playback/Inventory/DemoTracerReplayLoadout.cs) | ✅ 匹配 |

## v1.6.5

| 检查项 | 结果 |
| --- | --- |
| [CCSBot::EquipBestWeapon](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::EquipPistol](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_WeaponServices::SelectItem](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_WeaponServices::GetSlot](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::Update](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::Upkeep](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::IsVisiblePos](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::IsVisiblePlayer](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [BuyState::OnUpdate](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [BuyState::InitialDelay (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [BuyState::DoneBuying (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CCSBot::UpdateLookAngles](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayerPawn::SetEyeAngles](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBasePlayerPawn::GetEyeAngles](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::LadderStateUpdate](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::InvalidatePath](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBaseEntity::SetMoveType](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBaseEntity::SetAbsOrigin](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBaseEntity::SetAbsVelocity](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_MovementServices::ProcessMovement](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_MovementServices::PhysicsSimulate](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CEntityIdentity::EHandle (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CCSPlayer_MovementServices::Pawn (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::ForwardMove (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::SideMove (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::UpMove (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::Velocity (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::AbsOrigin (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [vtidx::PlayerRunCommand (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [vtidx::SetupMove (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [vtidx::FinishMove (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [GameResourceServiceServer::EntitySystem (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CEntitySystem::IdentityChunks (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::Size (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [UTIL_Remove](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CCSBotManager::MaintainBotQuota](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CCSPlayerController::HandleCommand_JoinTeam](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CNetworkGameServer::PackEntities](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CServerSideClient::SetName (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CNetworkGameServerBase::UserInfoChanged (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [GameResourceServiceServer::m_pEntitySystem (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntitySystem::m_EntityList (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::Size (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::m_pInstance (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::m_designerName (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CNetworkGameServerBase::m_Clients (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CBasePlayerController::FakeClientFlags (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_Name (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_nEntityIndex (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_NetChannel (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_nConnectionTypeFlags (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_bFakePlayer (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_UserID (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_SteamID (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_SteamIDMirror (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_bIsHLTV (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [Projectile physics signature](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [Server image fingerprint](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [Projectile entry](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [Projectile function body](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [Projectile virtual references](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [BotRandomizer: writer](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ 匹配 |
| [BotRandomizer: itemViewDestructor](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ 匹配 |
| [BotRandomizer: itemViewConstructor](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_bControllingBot](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/src/DemoTracer/Lifecycle/DemoTracerPlugin.cs) | ✅ 匹配 |
| [Schema: CBot::m_pPlayer](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_enemy](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_isEnemyVisible](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_visibleEnemyParts](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_lastSawEnemyTimestamp](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_firstSawEnemyTimestamp](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_currentEnemyAcquireTimestamp](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_isLastEnemyDead](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_nearbyEnemyCount](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CEntityInstance::m_pEntity](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_lifeState](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_MoveType](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_nActualMoveType](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_fFlags](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_vecAbsVelocity](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_CBodyComponent](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBodyComponent::m_pSceneNode](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CGameSceneNode::m_vecAbsOrigin](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_pWeaponServices](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_pMovementServices](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_pItemServices](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_hController](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerPawnBase::m_hOriginalController](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::v_angle](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::v_anglePrevious](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerPawn::m_ArmorValue](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_ItemServices::m_bHasHelmet](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_ItemServices::m_bHasDefuser](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_iPawnArmor](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_bPawnHasHelmet](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_bPawnHasDefuser](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CPlayer_WeaponServices::m_hActiveWeapon](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CPlayer_MovementServices::m_vecOldViewAngles](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_vecLadderNormal](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_bDucked](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_flDuckAmount](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_flDuckSpeed](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_bDesiresDuck](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_bDucking](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CEconEntity::m_AttributeManager](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CAttributeContainer::m_Item](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CEconItemView::m_iItemDefinitionIndex](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CPlayer_MovementServices::m_nButtons](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CInButtonState::m_pButtonStates](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerController::m_hPawn](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerPawnBase::m_flIdleTimeSinceLastAction](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_hPlayerPawn](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_szCrosshairCodes](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_iPing](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_iTeamNum](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController_InGameMoneyServices::m_iAccount](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/src/DemoTracer/Playback/Inventory/DemoTracerReplayLoadout.cs) | ✅ 匹配 |
| [Schema: CPlayerControllerComponent::__m_pChainEntity](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/src/DemoTracer/Playback/Inventory/DemoTracerReplayLoadout.cs) | ✅ 匹配 |

## main

| 检查项 | 结果 |
| --- | --- |
| [CCSBot::EquipBestWeapon](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::EquipPistol](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_WeaponServices::SelectItem](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_WeaponServices::GetSlot](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::Update](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::Upkeep](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::IsVisiblePos](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::IsVisiblePlayer](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [BuyState::OnUpdate](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [BuyState::InitialDelay (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [BuyState::DoneBuying (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CCSBot::UpdateLookAngles](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayerPawn::SetEyeAngles](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBasePlayerPawn::GetEyeAngles](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::LadderStateUpdate](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSBot::InvalidatePath](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBaseEntity::SetMoveType](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBaseEntity::SetAbsOrigin](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CBaseEntity::SetAbsVelocity](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_MovementServices::ProcessMovement](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CCSPlayer_MovementServices::PhysicsSimulate](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ✅ 匹配 |
| [CEntityIdentity::EHandle (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CCSPlayer_MovementServices::Pawn (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::ForwardMove (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::SideMove (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::UpMove (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::Velocity (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CMoveData::AbsOrigin (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [vtidx::PlayerRunCommand (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [vtidx::SetupMove (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [vtidx::FinishMove (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [GameResourceServiceServer::EntitySystem (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CEntitySystem::IdentityChunks (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::Size (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json) | ⚪ 未核查 |
| [UTIL_Remove](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CCSBotManager::MaintainBotQuota](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CCSPlayerController::HandleCommand_JoinTeam](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CNetworkGameServer::PackEntities](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ✅ 匹配 |
| [CServerSideClient::SetName (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CNetworkGameServerBase::UserInfoChanged (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [GameResourceServiceServer::m_pEntitySystem (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntitySystem::m_EntityList (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::Size (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::m_pInstance (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CEntityIdentity::m_designerName (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CNetworkGameServerBase::m_Clients (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CBasePlayerController::FakeClientFlags (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_Name (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_nEntityIndex (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_NetChannel (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_nConnectionTypeFlags (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_bFakePlayer (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_UserID (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_SteamID (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_SteamIDMirror (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [CServerSideClient::m_bIsHLTV (layout)](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json) | ⚪ 未核查 |
| [Projectile physics signature](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [Server image fingerprint](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [Projectile entry](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [Projectile function body](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [Projectile virtual references](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/config/demotracer-native.json) | ✅ 匹配 |
| [BotRandomizer: writer](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ 匹配 |
| [BotRandomizer: itemViewDestructor](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ 匹配 |
| [BotRandomizer: itemViewConstructor](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/BotRandomizer/BotRandomizerItems.cs) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_bControllingBot](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/src/DemoTracer/Lifecycle/DemoTracerPlugin.cs) | ✅ 匹配 |
| [Schema: CBot::m_pPlayer](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_enemy](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_isEnemyVisible](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_visibleEnemyParts](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_lastSawEnemyTimestamp](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_firstSawEnemyTimestamp](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_currentEnemyAcquireTimestamp](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_isLastEnemyDead](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSBot::m_nearbyEnemyCount](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CEntityInstance::m_pEntity](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_lifeState](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_MoveType](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_nActualMoveType](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_fFlags](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_vecAbsVelocity](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_CBodyComponent](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBodyComponent::m_pSceneNode](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CGameSceneNode::m_vecAbsOrigin](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_pWeaponServices](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_pMovementServices](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_pItemServices](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::m_hController](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerPawnBase::m_hOriginalController](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::v_angle](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerPawn::v_anglePrevious](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerPawn::m_ArmorValue](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_ItemServices::m_bHasHelmet](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_ItemServices::m_bHasDefuser](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_iPawnArmor](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_bPawnHasHelmet](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_bPawnHasDefuser](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CPlayer_WeaponServices::m_hActiveWeapon](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CPlayer_MovementServices::m_vecOldViewAngles](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_vecLadderNormal](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_bDucked](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_flDuckAmount](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_flDuckSpeed](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_bDesiresDuck](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CCSPlayer_MovementServices::m_bDucking](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CEconEntity::m_AttributeManager](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CAttributeContainer::m_Item](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CEconItemView::m_iItemDefinitionIndex](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CPlayer_MovementServices::m_nButtons](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CInButtonState::m_pButtonStates](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ✅ 匹配 |
| [Schema: CBasePlayerController::m_hPawn](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerPawnBase::m_flIdleTimeSinceLastAction](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_hPlayerPawn](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_szCrosshairCodes](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController::m_iPing](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CBaseEntity::m_iTeamNum](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-hider/src/plugin.cpp) | ✅ 匹配 |
| [Schema: CCSPlayerController_InGameMoneyServices::m_iAccount](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/src/DemoTracer/Playback/Inventory/DemoTracerReplayLoadout.cs) | ✅ 匹配 |
| [Schema: CPlayerControllerComponent::__m_pChainEntity](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/src/DemoTracer/Playback/Inventory/DemoTracerReplayLoadout.cs) | ✅ 匹配 |
