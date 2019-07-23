import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-app-server",
  templateUrl: "./app-server.component.html",
  styleUrls: ["./app-server.component.scss"]
})
export class AppServerComponent implements OnInit {
  items: Array<String>;
  element: { type: string; name: string; content: string };
  @ViewChild("serverIt") serverInput: ElementRef;

  constructor() {
    this.items = ["President Trump", "Sanders Benie", "Kamala Haris"];
  }
  onAddPoli = (nameInput: HTMLInputElement) => {
    console.log(JSON.stringify(nameInput.value));
  };

  ngOnInit() {}
}
