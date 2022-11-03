import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAllComponent } from './update-all.component';

describe('UpdateAllComponent', () => {
  let component: UpdateAllComponent;
  let fixture: ComponentFixture<UpdateAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
