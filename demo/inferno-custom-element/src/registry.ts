function greaterEqual(_v1, _v2) {
  const v1 = _v1.split('.');
  const v2 = _v2.split('.');
  // Start with minor, major always matches
  for (let i = 1; i < v1.length; i++) {
    if (parseInt(v1[i]) < parseInt(v2[i])) {
      return false;
    }
  }
  return true;
}

/*
The library registry allows us to share libraries between the main app and the custom elements. This
way we make sure that evrything is run in sync. By allowing multiple major versions, we avoid
issues with breaking changes when older custom elements are mixed with newer apps and custom
elememnts.
*/
export class InfernoLibrary {
  _store = {};

  register(moduleName, library, version = undefined) {
    const majorVersion = version ?? library.version.split('.')[0];

    this._store[majorVersion] ??= {
      _v_: library._v_,
    }

    if (this._store[majorVersion]._v_ !== library._v_) {
      throw new Error(`${moduleName}@${library._v_} doesn't match existing ${this._store[majorVersion]._v_}`);
    }

    this._store[majorVersion][moduleName] ??= library;
  }

  import(statement) {
    const [moduleName, version] = statement.split('@');
    const majorVersion = version.split('.')[0];
    const library = this._store[majorVersion]?.[moduleName];
    if (!library) {
      throw new Error(`No ${moduleName}@${majorVersion} registered`);
    }
    if (library.version && !greaterEqual(version, library.version)) {
      console.warn(`Requested ${moduleName}@${version} is greater than available ${library._v_}`);
    }
    return library
  }
}
