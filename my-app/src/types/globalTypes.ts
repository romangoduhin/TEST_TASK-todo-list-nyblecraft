import React from "react";

export type Children = React.ReactNode;

export type ClassName = string;

export type ChangeEvent<T> = React.ChangeEvent<T>;

export type KeyboardEvent<T> = React.KeyboardEvent<T>;

export type Id = number;

export type Tag = string;

export type Tags = Array<Tag>;

export interface Note {
    id: Id,
    text: string,
    tags: Tags
}

export type Notes = Array<Note> | [];