---
title: "Tutorial: Teleporter"
pubDate: 2025-02-09
description: Ein Teleporter
cover: ../../../public/teleporter/teleporter.png
coverAlt: Der Teleporter
tags:
  - Godot
  - Tutorial
author: Hauke
index: 6.5
nextPost: element-door
---

In diesem Tutorial lernst du, wie du ein Teleporter erstellst, um
auf die andere Platform zu kommen.

![Problem](/Godot-Parkour-Guides//teleporter/problem.png)

Der Teleporter unterscheidet sich nicht sehr vom JumpPad.
Er führt nur nicht die "jump"-Funktion aus, sondern setzt
die Spielerposition.

---

### JumpPad copypasta

_Ja eine Menge Sachen hier sind eigentlich wie
im JumpPad Tutorial und dient mehr zu Vertiefung der
Inhalte aus dem JumpPad-Tutorial_

Erstelle zuerst eine **Area3D**, wie beim JumpPad
und ziehe sie dahin, wo der Teleporter platziert werden soll.

![Area3D](/Godot-Parkour-Guides//teleporter/area3d.png)

Nenne sie in "Teleporter" um.

![Benenne den Teleporter](/Godot-Parkour-Guides//teleporter/rename-tel.png)

Bevor ich mich um die `CollisionShape` kümmere, kümmere
ich mich um das Mesh.

Ich erstelle hierfür einen **CSGCombiner3D** und baue
meinen Teleporter aus CSG-Elementen zusammen.

Ich verwende dabei **CSGCylinder3D**'s.

_Wichtig dabei: Damit sie schön rund aussehen, setze
die `Sides`-Variable höher_

![Cylinder Props](/Godot-Parkour-Guides//teleporter/cyl-props.png)
![Cylinder](/Godot-Parkour-Guides//teleporter/csg-cylinder.png)

Wie du den Teleporter modellierst ist nicht wichtig.  
Also fast forward:

![Fertiges CSG](/Godot-Parkour-Guides//teleporter/finished-csg.png)

So sieht das bei mir im Scene-Tree aus:

![Fertiges CSG im Scene-Tree](/Godot-Parkour-Guides//teleporter/finished-csg2.png)

Eine `CollisionShape` haben wir aber immer noch nicht.

Um mir das zu vereinfachen, konvertiere ich den **CSGCombiner**
in ein Mesh (siehe `Tipp: Schnelles Levelbauen`-Ende).  
_Ich benenne es danach zur Übersicht um_

![Mesh](/Godot-Parkour-Guides//teleporter/rename-mesh.png)

Daraus generiere ich jetzt eine **CollisionShape**.

![CollisionShape](/Godot-Parkour-Guides//teleporter/create-cs.png)

Wie beim JumpPad, erstellst du nun ein Skript auf dem Teleporter (Area3D) Node.
Verbinde danach das `body_entered`-Signal mit dem Teleporter.

![Verbinde Signal](/Godot-Parkour-Guides//teleporter/connect-signal.png)
![Verbinde Signal](/Godot-Parkour-Guides//teleporter/connect-signal2.png)

Danach schreibe ich diesen Code:

![Code](/Godot-Parkour-Guides//teleporter/code.png)

Das Einzige was wir machen, wenn ein `body` unsere `Area3D` (aka. Teleporter)
berührt hat, ist seine globale Position auf die globale Position eines
beliebigen `Node3D`'s zu setzen.

Mit dem `@export` machen wir die `target`-Variable im
Inspektor sichtbar.

So sieht das im Inspektor aus:

![Neue Variable](/Godot-Parkour-Guides//teleporter/new-prop.png)

Erstelle an der Position, wo dein Teleporter hinführen soll ein
einfaches **Node3D**.

![Node3D](/Godot-Parkour-Guides//teleporter/target-node.png)

Ich nenne es noch "TeleporterTarget", damit ich weiß was es sein soll.

![Benenne Node3D](/Godot-Parkour-Guides//teleporter/rename-node.png)

Nun kannst du wieder den Inspektor des "Teleporter"-Nodes öffnen und das
"TeleporterTarget"-Node in die Target-Variable ziehen.

![Setze Ziel](/Godot-Parkour-Guides//teleporter/set-target-node.png)

Vergiss nicht die CollisionMask des "Teleporter" (Area3D) zu setzen!  
_(Hab ich in meinem Test vergessen, sind lustige Dinge passiert.)_

![CollisionMask](/Godot-Parkour-Guides//teleporter/cs-mask.png)

Jetzt **sollte™** alles funktionieren!  
StarTrak mäßiger Teleporter!
