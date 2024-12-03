import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlogComponent } from './form-blog.component';

describe('FormBlogComponent', () => {
  let component: FormBlogComponent;
  let fixture: ComponentFixture<FormBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
