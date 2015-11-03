# typeapp
Use Typescript to build angular/ionic mobile applications


first ensure all Android/iOS dependencies are installed
- Android SDK
- Xcode

-----------

    npm run app-init 
    
downloads and setup cordova/ionic and all the project dependencies
and prep the www folder.

    gulp default
    
takes compiled typescript files and rebuilds the www folder

then run

    ionic emulate ios
    //OR
    ionic emulate android

### short cut gulp commands

use this when your ide is auto compiling typescript and you only have typescipt changes

    gulp ts:app

use this if your ide does not auto compile typescript

    gulp ts:compile
    gulp ts:app

If you only have html changes

    gulp templates

If you only have SCSS changes

    gulp styles

Pull Requests are always welcome.