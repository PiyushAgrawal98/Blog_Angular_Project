import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfomationComponent } from './contact-infomation.component';

describe('ContactInfomationComponent', () => {
  let component: ContactInfomationComponent;
  let fixture: ComponentFixture<ContactInfomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
