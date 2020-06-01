import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalsComponent, compute, greet, getCurrencies } from './fundamentals.component';

describe('computeTestSuite', () => {
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [FundamentalsComponent]
  //   })
  //     .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(FundamentalsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('Should return 0 if input is -ve', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  })

  it('Should return increamented value if input is +ve ', () => {
    const result = compute(2);
    expect(result).toBe(3);
  })
});


describe("GreetTestSuite", () => {
  it("Should include name in the message", () => {
    expect(greet("Shyam")).toContain("Shyam");
  })
})

describe("getCurrenciesTestSuite", () => {
  it('Should return supported correncies', () => {
    const result = getCurrencies();
    expect(result).toContain("USD");
    expect(result).toContain("POUND");
    expect(result).toContain("AUD");
    expect(result).toContain("EURO");
  })
})