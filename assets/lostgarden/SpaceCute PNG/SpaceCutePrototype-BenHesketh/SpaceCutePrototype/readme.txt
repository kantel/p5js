SpaceCute prototype

Needs .NET 2.0 Framework to run

To play:
Mouse over a rocketship, hold down left mouse button, drag and then release.
Press 'r' to create a new level

Settings:
These are in the SpaceCute.exe.config file.

Damping - each frame the velocity of any moving object is reduced by this amount (as a percentage of the current speed)
MaxSpeed - the maximum speed a ship can go at
MaxHealth - the starting health of each ship
NumAIShips - how many AI ships (the beetle ones)
NumPlayerShips - number of player ships (the rocket ones)
NumPlanets - how many planets there are
StartingSpeed - initial speed of the ships. Leave at zero!
PlanetsDoDamage - bumping into a planet does damage to a ship
SimultaneousMove - not implemented.
SimpleDamping - true: just use the damping value, false: adds in an extra amount of velocity dependent damping. (Basically slows the ships down more as their speed decreases. Stops the ships dribbling along for ages!)
VelocityDampingMultiplier - how strong the velocity dependent damping is (only used when SimpleDamping = false)
LoopedBoundaries - go off one side, come on the other (NB AI doesn't know about this!)
Debug - shows some debug lines etc.
PlanetInstaGib - hit a planet and die (PlanetsDoDamage must be on).

Sounds:
They are all in one directory and they are picked at random. If you don't like one just delete it from the directory and restart. On the other hand if you want to add some more just drop them into the directory and restart.

Graphics:
Window doesn't resize properly, just leave it at 800x600.