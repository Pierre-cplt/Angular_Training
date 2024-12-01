import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({
    declarations: [AppComponent], // for non standalone component
    bootstrap: [AppComponent], // ROOT component qui démarre l'app
     imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // for standalone component
    
})
export class AppModule {

}