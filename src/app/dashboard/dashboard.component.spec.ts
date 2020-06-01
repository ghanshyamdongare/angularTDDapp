import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  // let component: DashboardComponent;
  // let fixture: ComponentFixture<DashboardComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ DashboardComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(DashboardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  describe("voteComponent", () => {
    let component: DashboardComponent;

    beforeEach(() => {
      component = new DashboardComponent();
    })


    afterEach(() => {
    })
    
    it("should increment total votes when upvoted", () => {
      component.upVote();
      expect(component.totalVotes).toBe(1);
    })

    it("should decrement total votes when downvoted", () => {
      component.downVote();
      expect(component.totalVotes).toBe(-1);
    })
  })
});
