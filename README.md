# EUROPEN REACT TUTORIAL
1. Udelame sachovnici
2. S figurkama
3. umime sachonvici vyresetovat

## What will we be using?
1. Figurky ASCII: https://en.wikipedia.org/wiki/Chess_symbols_in_Unicode

### node.js and dependencies
1. Use nvm: https://github.com/creationix/nvm
2. Install latest node: `nvm install v4.1.1`
3. Grab the source: `git clone https://github.com/jirihofman/europen-react-tutorial`
4. Install dependencies: `npm i`

# Co jsme se naucili

## FLUX
1. FLUX - jeden smer
2. Redux (Abramov)
 - jeden stav
 - kazdy stav je nova kopie ... jednoduchy prechod zpet (undo/redo)
 - stav je nemmenny, immutable
 - akce je JS objext, jde serializovat
 - akce jdou po sobe synchronne
 - zmeny stavu pomoci pure funkce = reducer (nema side-effect)
 - jednoduchost, testovatelnost

3. STAV
 - GUI i DATA (data ze serveru, kontejner, do ktereho naleju data ze serveru)
 - trivialni stavy staci managovat jen v aplikaci (napr. jestli je dropwodn rozbaleny nebo ne)
