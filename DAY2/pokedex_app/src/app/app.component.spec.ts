import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { LoaderService } from "./shared/services/loader.service";
import { RouterTestingModule } from "@angular/router/testing";

describe("test suite for AppComponent", () => {
  it("should create App Component instance", async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      providers: [LoaderService],
    }).compileComponents(); // compile the component and its template & styles
    // create an instance of the AppComponent
    const fixture = TestBed.createComponent(AppComponent); // instantiation of App Component
    // fixture is a wrapper around the component instance
    const appInstance = fixture.componentInstance; // get component instance from the fixture
    // check if the component instance is created successfully
    expect(appInstance).toBeTruthy();
  });
});
