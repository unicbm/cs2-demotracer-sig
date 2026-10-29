# 签名与 Schema 核查

CS2 1.41.9.3 · Windows x64 · Build 26281801 · 2026-10-29T10:38:13.604Z

| 源码版本 | 匹配 | 失配 | 未核查 |
| --- | ---: | ---: | ---: |
| [v1.6.4](https://github.com/unicbm/demotracer/tree/e048c080bcb7b49a6c42138d7ce070abf52bd095) | 27 | 4 | 34 |
| [v1.6.5](https://github.com/unicbm/demotracer/tree/be9c22e0554e347eabe3e5eae2ffad82e1b28e77) | 31 | 0 | 34 |
| [main](https://github.com/unicbm/demotracer/tree/be9c22e0554e347eabe3e5eae2ffad82e1b28e77) | 31 | 0 | 34 |

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
| [Dynamic Schema](https://github.com/unicbm/demotracer/blob/e048c080bcb7b49a6c42138d7ce070abf52bd095/server/runtime/dtr-controller/src/common/version_targets.cpp) | ⚪ 未核查 |

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
| [Dynamic Schema](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ⚪ 未核查 |

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
| [Dynamic Schema](https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/runtime/dtr-controller/src/common/version_targets.cpp) | ⚪ 未核查 |
