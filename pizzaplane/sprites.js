// Hilfsfunktionen zu Sprites
// eventuell noch in eine Operklasse zu integrieren

function isRectCollision(self, other) {
  let distanceX = (self.x + self.w/2) - (other.x + other.w/2);
  let distanceY = (self.y + self.h/2) - (other.y + other.h/2);
  let halfW = self.w/2 + other.w/2;
  let halfH = self.h/2 + other.h/2;
  if (abs(distanceX) < halfW) {
    if (abs(distanceY) < halfH) {
      return true;
    }
  }
  return false;
}