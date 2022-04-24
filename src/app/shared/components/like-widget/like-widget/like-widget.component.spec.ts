import { LikeWidgetModule } from './../like-widget.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './../../../services/unique-id.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('Should create component', () => {
    const component = fixture.componentInstance;
    expect(component).toBeInstanceOf(LikeWidgetComponent);
  });

  it(`#${LikeWidgetComponent.prototype.ngOnInit.name} should auto generate ID when id input property is missing`, () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it(`#${LikeWidgetComponent.prototype.ngOnInit.name} should not auto generate ID when id input property is not missing`, () => {
    const component = fixture.componentInstance;
    component.id = 'someId'
    fixture.detectChanges();
    expect(component.id.startsWith('someId')).toBeTrue();
  })
});
