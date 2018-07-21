import { CardModule } from './card.module';

describe('CardsModule', () => {
  let cardsModule: CardModule;

  beforeEach(() => {
    cardsModule = new CardModule();
  });

  it('should create an instance', () => {
    expect(cardsModule).toBeTruthy();
  });
});
