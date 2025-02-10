---
title: "Tipps: Schnelles Levelbauen"
pubDate: 2025-02-10
description: Wie man mit CSG schnell Level bauen kann
cover: ../../../public/levelbuilding/finished-level.png
coverAlt: Das JumpPad
tags:
  - Godot
  - "Tipps & Tricks"
author: Hauke
---

Level mit vielen StaticBodies, MeshInstances und CollisionShapes zu
bauen ist anstrengend und zeitaufwendig.

_Aber was wenn es auch einfacher geht?_

CSG's sind einfache Formen, die sich kombinieren lassen um Level
zu bauen.

Wenn ich anfange CSG zu benutzen starte ich mit der Erstellung
eines einfachen `Node3D`, warum wird später relevant.
Benenne es nach belieben.

![Node Umbennen](/Godot-Parkour-Guides//levelbuilding/rename-node.png)

Erstelle nun einen **CSGCombiner3D** als Unter-Node.

![Erstelle CSGCombiner3D](/Godot-Parkour-Guides//levelbuilding/create-csg-c.png)

Dieses Node wird benutzt, um alle Formen
zu vereinen.

Nun kommt die erste Form. Eine **CSGBox3D**.

![Erstelle CSGBox3D](/Godot-Parkour-Guides//levelbuilding/create-csgbox.png)

Ziehe sie dahin, wo du sie haben möchtest.

![Bewege CSGBox3D](/Godot-Parkour-Guides//levelbuilding/move-box.png)

Mit den orangenen Punkten, kannst du die Größe ändern.

![Größe ändern](/Godot-Parkour-Guides//levelbuilding/resize-box.png)

Im Inspektor der CSGBox3D kannst du ein Material setzen.

![Setze Material](/Godot-Parkour-Guides//levelbuilding/set-material.png)

Wähle die CSGBox3D im Scene Tree und drücke `Strg+D`.  
Damit kopierst du das Node und kannst es daneben ziehen.

![Kopiere Box](/Godot-Parkour-Guides//levelbuilding/copy-box.png)

Kopiere erneut und ändere die Größe.

![Kopiere Box](/Godot-Parkour-Guides//levelbuilding/copy-larger-box.png)

Es gibt auch noch viele andere CSG Formen.

![Mehr CSG Formen](/Godot-Parkour-Guides//levelbuilding/more-csg-elements.png)

Ich nutze jetzt aber die **ProtoRamp**, aus dem gleichnamigen Plugin.  
_Sollte vorinstalliert sein._

![ProtoRamp](/Godot-Parkour-Guides//levelbuilding/proto-ramp.png)

Dieser kannst du auch ein Material geben.

![ProtoRamp Material](/Godot-Parkour-Guides//levelbuilding/pr-material.png)

Du kannst auch Stufen daraus machen.

![ProtoRamp Stufen](/Godot-Parkour-Guides//levelbuilding/pr-stairs.png)

Und setze die Stufenanzahl.

![ProtoRamp Stufenanzahl](/Godot-Parkour-Guides//levelbuilding/pr-set-stairs.png)

_Fast forward_

So sieht mein Parkour-Element jetzt aus:

![Cool Element](/Godot-Parkour-Guides//levelbuilding/cool-levl.png)

Ich möchte oben ein Loch erstellen, damit der Spieler
durchfallen kann.  
Statt das jetzt mit mehren Formen zu lösen, gibt uns
CSG eine andere Möglichkeit.

Kopiere hierfür die obere Platform und mache die Kopie ein
wenig kleiner als das Original.

![Kopiere Inneres](/Godot-Parkour-Guides//levelbuilding/copy-inner.png)

Setze nun Operation auf `Subtraction`

![Setze Subtraction](/Godot-Parkour-Guides//levelbuilding/set-subtract.png)

Wenn kleine Graphikbugs auftauchen, wie hier zu sehen

![Fehler](/Godot-Parkour-Guides//levelbuilding/issue.png)

Liegt das daran, dass CSG es nicht mag, wenn
Flächen oder Kanten zu nah aufeinaner liegen.

In dem Fall kannst du die innere Box einfach ein wenig größer machen.

![Fix Box](/Godot-Parkour-Guides//levelbuilding/fix-issues2.png)

Siehe an, schon ist ein Loch aufgetaucht.

![Subtracted Box](/Godot-Parkour-Guides//levelbuilding/subtracted-box2.png)

Bevor du das Level jetzt testest, must du beim
CsgCombiner3D die Kollisionen aktivieren.

![Setze Kollision](/Godot-Parkour-Guides//levelbuilding/set-collision.png)

Nun generiert Godot überall selbstständig `CollisionShapes`.

![Level mit Kollisionen](/Godot-Parkour-Guides//levelbuilding/level2.png)

Fertig ist ein Level-Element!

---

### Hinweis

Der CSGCombiner3D mit angeschalteter Kollision verhält sich wie
ein `StaticBody3D`.  
Heißt, dass man es nicht mit Code oder Anderem bewegen kann.

Wenn man keine StaticBody-Eingenschaften haben will,
muss man den CSGCombiner3D in eine MeshInstance3D konvertieren.

_Achtung! Diesen Process kann man nicht rückgängig machen!_

Wähle dafür `CSGCombiner3D` im Scene Tree und suche in der
oberen Leiste nach **CSG to MeshInstance**.

![CSG to MeshInstance](/Godot-Parkour-Guides//levelbuilding/convert-csg.png)

Nun kommt es zugute, dass wir alles in ein extra Node3D gepackt haben.
Ändere dessen Typ auf was du haben willst.  
_Hier jetzt ein `AnimatableBody3D`_.

![Ändere Typ](/Godot-Parkour-Guides//levelbuilding/make-body.png)

Für die `CollisionShape3D` wählst du das generierte Mesh
wieder im Scene Tree aus und
suchst in der oberen Leiste nach **CollisionShape erstellen**.

![Generiere CollisionShape](/Godot-Parkour-Guides//levelbuilding/generate-cs.png)

Lasse alles auf normal und drücke **Erstellen**.

![Erstelle CollisionShape](/Godot-Parkour-Guides//levelbuilding/generate-cs2.png)

Jetzt hast du alle Elemente, wie bei der Platform.

- AnimatableBody3D
- MeshInstance3D
- CollisionShape3D

![Fertige Elemente](/Godot-Parkour-Guides//levelbuilding/finished-body.png)
