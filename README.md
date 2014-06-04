# doge toe

Doge tic-tac-toe made in Dogescript.

![screen](http://alexdantas.net/stuff/wp-content/uploads/2014/06/doge-boy.png)

* [Play it online (live demo)][live]!
* [Why did I do it?][post].

## Usage

To run a local copy of the game, [download the repository][repo] and run a webserver on top of the directory.

For example:

```bash
# Local web server with Ruby
$ ruby -run -e httpd . -p 8000

# Local web server with Python
$ python -m SimpleHTTPServer
```

Then, point your web browser to `http://localhost:8000` and play the game! 

## Development

If you want to further enhance it, first you need to install it's dependencies.

After [cloning the repository][repo], install all dependencies with `grunt`:

```bash
$ grunt install
```

## License

This game is licensed under the **WTFPL-2.0**.

See file `LICENSE.md` to see what you can and cannot do with the source code.

[live]: http://alexdantas.net/games/doge-toe/
[post]: http://alexdantas.net/stuff/posts/doge-toe-tic-tac-toe-with-dogescript/
[repo]: https://github.com/alexdantas/doge-toe/archive/master.zip

