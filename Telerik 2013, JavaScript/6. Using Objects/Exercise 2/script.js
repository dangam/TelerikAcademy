Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

var ar = [1, 2, 1, 3, 1, 4, 1];
ar.remove(1);

for (var i = 0; i < ar.length; i++) {
    jsConsole.writeLine(ar[i]);
}