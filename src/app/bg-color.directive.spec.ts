import { BgColorDirective } from './bg-color.directive';

describe('BgColorDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') } as any;
    const directive = new BgColorDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
