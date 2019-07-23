import { createAction, props } from "@ngrx/store";
import { Appuser } from "../model/appuser";

export const login = createAction(
  "[Login Page] User Login",
  props<{ user: Appuser }>()
);

export const logout = createAction("[Top Menu] User logout");
