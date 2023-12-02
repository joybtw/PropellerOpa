Config = []

// Wolken
Config.MaxClouds = 10 // Maximale Wolken, die Spawnen
Config.MinDistanceY = -20 // - Anzahl an Abstand von oben (Minus ist zu ignorieren, aber hinzuschreiben) Spricht f�r einen Abstand von 10px -> -10 schreiben
Config.MinDistanceX = 30 // Absand von links in px
Config.MaxDistanceX = window.innerWidth - 10 //  Abstand von rechts in px, also spricht window.innerWidth - bleibt und nur 10 wird ersetzt
Config.MaxDistanceY = window.innerHeight / 8 // W�rde ich NICHT �ndern => Perfekt eingestellt

// Bomben
Config.StartObjects = 1 // Bomben  mit denen gestartet wird
Config.MaxObjects = 8 // Maximale Bomben die spawnen werden
Config.MinObjDistanceY = -600 // - Anzahl an Abstand von oben (Minus ist zu ignorieren, aber hinzuschreiben) Spricht f�r einen Abstand von 600px -> -600 schreiben
Config.MinObjDistanceX = 200 // Absand von links in px
Config.MaxObjDistanceX = window.innerWidth - 50 // Abstand von rechts in px, also spricht window.innerWidth - bleibt und nur 10 wird ersetzt
Config.MaxObjDistanceY = (window.innerHeight / 3) - 50 // W�rde ich NICHT �ndern => Perfekt eingestellt
