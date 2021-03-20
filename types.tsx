export type RootStackParamList = {
  Root: undefined;
  ChatRoom: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type AparatParamList = {
  AparatScreen: undefined;
};

export type ChatyParamList = {
  ChatyScreen: undefined;
};

export type StatusParamList = {
  StatusScreen: undefined;
};

export type HistoryParamList = {
  HistoryScreen: undefined;
};

export type TabParamList = {
  Aparat: undefined;
  Chaty: undefined;
  Status: undefined;
  Historia: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
}

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
}

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
}