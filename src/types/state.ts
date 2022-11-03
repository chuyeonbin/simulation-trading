export interface SocketState {
  presentPriceSocketLoading: boolean;
  presentPriceSocketDone: boolean;
  presentPriceSocketError: Error | null;

  tradeSocketLoading: boolean;
  tradeSocketDone: boolean;
  tradeSocketError: Error | null;

  orderbookSocketLoading: boolean;
  orderbookSocketDone: boolean;
  orderbookSocketError: Error | null;
}

export interface CoinState {
  marketList: {
    code: string;
    koreanName: string;
    englishName: string;
  }[];

  tickerList: {
    [key: string]: {
      tradePrice: number;
      changePrice: number;
      accTradePrice24h: number;
      prevClosingPrice: number;
      signedChangePrice: number;
    };
  };

  selectedCoin: {
    marketName: string;
    code: string;
    tradePrice: number;
    highPrice: number;
    lowPrice: number;
    signedChangePrice: number;
    accTradeVolume: number;
    accTradePrice24h: number;
  };

  loadMarketListLoading: boolean;
  loadMarketListDone: boolean;
  loadMarketListError: Error | null;

  loadTickerListLoading: boolean;
  loadTickerListDone: boolean;
  loadTickerListError: Error | null;
}

export default interface RootState {
  socket: SocketState;
  coin: CoinState;
}
