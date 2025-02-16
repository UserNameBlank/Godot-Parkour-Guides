---
title: Hallo Godot!
pubDate: 2025-02-07
description: Der Godot Editor nochmal erklärt
cover: ../../../public/godot-editor.png
coverAlt: Der Godot Editor
tags:
  - Godot
  - Basics
author: Hauke
index: 1
nextPost: hello-gdscript
---

Der Godot-Editor:

![Godot Editor](/Godot-Parkour-Guides//editor-colored.png)

---

### Wichtige Hinweise

![Name ist nicht Typ](/Godot-Parkour-Guides//hello-godot/name-not-type.svg)

Der Name eines Nodes ist nicht gleich Typ.
Wenn ich einen neuen `StaticBody3D` erstelle, heißt er
StaticBody3D, weil das Godot's Standard Name ist.
Wenn ich den Typ dieses Nodes ändere, heißt es
immer noch StaticBody3D, weil Namen unabhängig
vom Typ sind.

**Nur das Icon beschreibt den Typen genau!**

Um verwirrung zu vermeiden, besonders wenn
man den Typ von Nodes später ändert, sollte
man wichtige Nodes immer einen passenden Namen
geben. z.B: "Platform", "Tür", etc.
