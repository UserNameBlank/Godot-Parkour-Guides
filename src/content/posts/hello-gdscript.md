---
author: Hauke
cover: ../../../public/gdscript-picture.png
coverAlt: Kompliziertes GDScript
description: GDScript auf einen Blick
pubDate: 2024-02-06 00:00:00
tags:
  - Godot
  - Programmieren
  - Basics
title: GDScript
index: 2
nextPost: tip-fast-levelbuilding
---

GDScript ist die Programmiersprache mit der du in Godot coole Sachen machen kannst.
Wenn du schon mal Python Programmiert hast, sollte es ganz einfach sein.

Hier ist mal etwas GDScript Code:

```gdscript
# Für was für eine Art von Node schreiben wir Code?
extends Node3D

# GDScript muss im Gegensatz zu Python in Funktionen ablaufen
# Denk an Arduino, da war's genauso.
# Deswegen schreib Code der am Start laufen soll in der "_ready" Funktion
func _ready():
  # GDScript braucht keine Semicolons, yippie!

  # Variablen erstellen
  var zahl := 1
  # Variablen setzen
  zahl = 2

  # variable ausgeben mit mathe
  print(zahl + 3)

  # wenn dann oder
  if zahl == 1:
    print("Zahl ist 1!")
  else:
    print("Zahl ist nicht 1!")

  # for loops funktionieren genauso wie in Python
  for i in range(10):
    print(i) # gibt nacheinander aus: 0 1 2 3 4 5 6 7 8 9

  # Funktionen aufrufen
  coole_function()

  # Arrays (oder Listen)
  var array := [1, 6, 9, 0]

  print(array[1]) # gibt 6 aus

  # gehe durch listen
  for e in array:
    print(e) # gibt nacheinander aus: 1 6 9 0

  # Node um 10 nach oben bewegen
  position.y += 10

func coole_function():
  print("Ich bin eine coole Function!")

```

<p style="color: white; background-color: red; border-radius: 6px; padding: 5px;"><b><i>Warnung! Ab hier folgt detailierte Erklärung
bitte überspringen wenn man's schon kapiert hat!</b></p>

## Die Sache mit dem Code

### -> extends <- ??!?

Man muss am Anfang der Datei Godot sagen welche Art von Node
man den gerne "steuern" möchte, damit wir auf dessen Funktionen und
Variablen zugreifen können.

Wenn ich eine Code-Datei für ein `Mesh3D` erstelle,
dann steht am Anfang diese Zeile:

```gdscript
extends Mesh3D
```

Damit sage ich Godot, dass unsere Code-Datei alle Funktionen
und Variablen von einem `Mesh3D` übernimmt.

_Godot generiert diese eine Zeile meist automatisch, also muss man da eigentlich nichts selber machen.
Ist aber ganz nett zu wissen._

### Setup

GDScript will nicht, dass du Code einfach so in die Datei schreibst.  
Beispiel:

```gdscript
# Das ist jetzt ne vollwertige Datei
extends Node3D


print("Hello, World!")
```

_Godot sagt Nein!_

Schreib deinen Code bitte in Funktionen (wie bei Arduino)  
Am Start wird immer die "\_ready" Funktion ausgeführt (wenn vorhanden)

Beispiel:

```gdscript
# Wieder vollwertige Datei
extends Node3D

func _ready():
  print("Hello, World!")
```

_Godot sagt Ja!_

### Loop

Übrigens: Es gibt auch ein equivalent zur Arduino `loop` Funktion:

```gdscript
# delta ist wichtig! Es ist die Zeit die seit dem letzten Frame vergangen ist.
func _process(delta):
  print("Ich werde jeden Frame ausgeführt")
  print("Zeit seit letztem Frame: %d" % delta)
```

## Variablen im Detail

### Ok, warum werden Variablen so komisch erstellt?

Wenn du eine Variable erstellst, dann sieht das so aus:

```gdscript
var name := wert
```

wobei "name" der name der variable und "wert" der wert ist (z.B. 42).

Das "**:**" vor dem "**=**" sorgt dafür, dass Godot automatisch herausfindet,
welche Art von Daten diese Variable speichern kann.

Als Beispiel, diese Zeile:

```gdscript
var zahl := 7
```

Sagt Godot: _"Schau mal ich erstelle eine Variable und setze sie auf 2.
Da 2 eine **ganze Zahl** ist, ist diese Variable jetzt ein Integer"_

Du kannst den Wert der Variable dann später so verändern:

```gdscript
zahl = 42
```

Die Art der Daten, die sich speichern lassen, lassen sich nicht
mehr ändern, nachdem man die Variable erstellt hat.
_(Ich cappe, mehr dazu unten.)_

Bei Arduino sähe das so aus:

```c
// Erstellen
int zahl = 2;
// Verändern
zahl = 42;
```

#### Wichtig

GDScript unterscheidet zwischen ganzen Zahlen und reellen Zahlen!
ein sogenannter `float` ist eine Kommazahl und sollte in der
Regel lieber verwendet werden.  
 Sonst kannst du z.B. `6.9696969696969` nicht speichern :(  
 Du machst das indem du sagst:

```gdscript
var zahl := 0.0
```

aus **0** mach **0.0**.
(oder aus **6** mach **6.0**, du verstehst das Prinzip?)  
 Oder explizit wenn paranoid:

```gdscript
var zahl : float = 0.0
```

Mach einfach eine Kommazahl draus,
wenn du merkst, dass dir Kommazahlen enthalten werden!

---

### Geheim

Wenn du das "**:**" weglässt ist der Typ unbekannt.
Du kannst die Variable später dann, wie in Python, auf alles mögliche setzen.  
Beispiel:

```gdscript
# Erstellen ohne ":="
var irgendwas = 0
# Setzen
irgendwas = Vector2(100, -100)
irgendwas = "Was ist denn jetzt los?"

print(irgendwas) # Gibt "Was ist denn jetzt los?" aus
```

Ist aber langsamer und wir wollen ja die paar extra **FPS** oder nicht?
