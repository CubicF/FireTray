/* -*- Mode: javascript; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

var EXPORTED_SYMBOLS = [ "pangocairo" ];

const PANGOCAIRO_LIBNAME = "pangocairo-1.0";
const PANGOCAIRO_ABIS    = [ 0 ];

const Cu = ChromeUtils;
const Cc = Components.classes;
const Ci = Components.interfaces;

Cu.import("resource://gre/modules/ctypes.jsm");
Cu.import("chrome://firetray/content/modules/ctypes/ctypes-utils.jsm");
Cu.import("chrome://firetray/content/modules/ctypes/linux/cairo.jsm");
Cu.import("chrome://firetray/content/modules/ctypes/linux/gobject.jsm");
Cu.import("chrome://firetray/content/modules/ctypes/linux/pango.jsm");

function pangocairo_defines(lib) {
  lib.lazy_bind("pango_cairo_show_layout", ctypes.void_t, cairo.cairo_t.ptr, pango.PangoLayout.ptr);
}

new ctypes_library(PANGOCAIRO_LIBNAME, PANGOCAIRO_ABIS, pangocairo_defines, this);
