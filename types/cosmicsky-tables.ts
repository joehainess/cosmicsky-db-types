
// announcement_data
type AnnouncementTypes = "twitter" | "forums" | "bosses" | "koth" | "minigames" | "black_market" | "global_boosters";
interface AnnouncementData {
  channel_id: string
  announcement_type: AnnouncementTypes
  timestamp: number
}

// black_market_wins
interface BlackMarketWin {
  season_number: number
  timestamp: number
  uuid: string
  item: string
  item_lore?: string
  amount: number
}

// boss_defeat_data
interface BossDefeatData {
  season_number: number
  timestamp: number
  uuid: string
  boss_name: string
  damage_percentage: number
}

// coinflip_data
interface CoinflipData {
  season_number: number,
  timestamp: number,
  winner_uuid: string, // UUID
  loser_uuid: string, // UUID
  amount: number,
  raw_message: string,
}

// deadchest_looted_data
interface DeadchestLootedData {
  season_number: number
  timestamp: number
  uuid: string
}

//event_data
type EventData = { timestamp: number, data?: string } & (
  {
    event_category: 'deadchest'
    sub_category: 'last_spawn' | 'daily_spawn'
  } | {
    event_category: 'boss_spawn'
    sub_category: string;
    data: string
  } | {
    event_category: 'minigame_open'
    sub_category: string;
  }
)

// forums_announcements
interface ForumsAnnouncement {
  timestamp: number
  link: string
  title: string
}

// jackpot_wins
interface JackpotData {
  season_number: number
  timestamp: number
  uuid: string
  amount_won: number
  tickets_purchased: number
  tickets_sold: number
  raw_message: string
}

// koth_capture_data
interface KothCaptureData {
  season_number: number
  timestamp: number
  uuid: string
}

// koth_lootbag_data
interface KothLootbagData {
  season_number: number
  timestamp: number
  uuid: string
  item: string
  item_quantity: number
}

// lootbox_data
interface LootboxData {
  season_number: number
  timestamp: number
  uuid: string
  lootbox_name: string
  item: string
  item_quantity: number
}

// minigame_wins
interface MinigameWin {
  season_number: number
  timestamp: number
  uuid: string
  type: 'regular_br' | 'team_br' | 'elite_br' | 'wager_br' | 'build_br' | 'god_mode_br' | 'skywars' | 'bedwars'
  kills: number
  amount_won?: number
  raw_message: string
}

// static_player_data
interface StaticPlayerData {
  uuid: string
  username: string
  
  last_seen?: number
  player_rank?: string
  reputation_points?: number
  discord_id?: string
}

// season_player_data
interface SeasonPlayerData {
  uuid: string
  season_number: number

  credit?: number,
  subscription_end?: number,
  island_level?: number
  player_level?: number
}

// player_titles
interface PlayerTitle {
  uuid: string
  title: string
}

// season_information
interface SeasonInformation {
  season_number: number,
  season_name: string,
  season_start: number,
  season_end: number,
}

// slotbot_data
interface SlotBotData {
  season_number: number
  timestamp: number
  uuid: string
  item: string
  item_quantity: number
}

// ticket_data
type TicketTypes = 'bug_report' | 'suggestion'
interface TicketData {
  ticket_id: string
  discord_id: string
  ticket_type: TicketTypes
  created_at: number
  title?: string
  description?: string
  submitted_at?: number
}

// permissions
type DiscordTypes = "GUILD" | "CHANNEL" | "USER" | "ROLE"
type PermissionTypes = "PERMISSION" | "GROUP"
interface PermissionRow {
  discord_type: DiscordTypes
  discord_id: string
  permission_type: PermissionTypes
  value: string
}

// group_permissions
interface GroupPermissionRow {
  group_name: string
  permission: string
}


interface Tables {
  permissions: PermissionRow
  group_permissions: GroupPermissionRow

  static_player_data: StaticPlayerData
  season_player_data: SeasonPlayerData
  player_titles: PlayerTitle

  ticket_data: TicketData

  announcement_data: AnnouncementData
  black_market_wins: BlackMarketWin
  boss_defeat_data: BossDefeatData
  coinflip_data: CoinflipData
  deadchest_looted_data: DeadchestLootedData
  event_data: EventData
  forums_announcements: ForumsAnnouncement
  jackpot_wins: JackpotData
  koth_capture_data: KothCaptureData
  koth_lootbag_data: KothLootbagData
  lootbox_data: LootboxData
  minigame_wins: MinigameWin
  season_information: SeasonInformation
  slotbot_data: SlotBotData
}

export type {
  AnnouncementData,
  BlackMarketWin,
  BossDefeatData,
  CoinflipData,
  DeadchestLootedData,
  EventData,
  ForumsAnnouncement,
  JackpotData,
  KothCaptureData,
  KothLootbagData,
  LootboxData,
  MinigameWin,
  StaticPlayerData,
  SeasonPlayerData,
  PlayerTitle,
  SeasonInformation,
  SlotBotData,
  PermissionRow,
  GroupPermissionRow,
}

export type { Tables }
