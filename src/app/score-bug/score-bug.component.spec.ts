import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBugComponent } from './score-bug.component';

describe('ScoreBugComponent', () => {
  let component: ScoreBugComponent;
  let fixture: ComponentFixture<ScoreBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreBugComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
