export enum AppRoute {
  Login = '/login',
  Root = '/',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  MyList = '/mylist',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
