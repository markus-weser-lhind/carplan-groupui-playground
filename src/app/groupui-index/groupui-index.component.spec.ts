import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupuiIndexComponent } from './groupui-index.component';

describe('GroupuiIndexComponent', () => {
  let component: GroupuiIndexComponent;
  let fixture: ComponentFixture<GroupuiIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupuiIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupuiIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
