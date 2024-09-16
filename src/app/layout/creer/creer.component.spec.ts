importCreerComponent { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerComponent } from './creer.component';

describe('CreerComponent', () => {
  let component: ;
  let fixture: ComponentFixture<CreerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerComponent]
    });
    fixture = TestBed.createComponent(CreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
