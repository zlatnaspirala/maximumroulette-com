
export function asyncLoad(path, callback ?) {

  if (typeof callback === "undefined") {
    callback = function () { };
  }

  var nuiScript = document.createElement("script")
  nuiScript.src = path
  document.head.appendChild(nuiScript)
  nuiScript.onload = function () {
    callback()
  }
}

// UPGRADE FOR VULETUBE APP ALSO
export function switchTheme (this: any) {
  var themes = this.$store.state.appStyle.themes()

  var nextThemeIndex = themes.indexOf((this.$root as any).$material.theming.theme) + 1;

  if (nextThemeIndex == themes.lenght) {
    nextThemeIndex = 0
    console.log(">>>>>>>>> reset")
  }

  (this.$root as any).$material.theming.theme = themes[nextThemeIndex]
  this.changeTheme(themes[nextThemeIndex])
}

export function setupLocal(route) {
  if (location.port == "3000") {
    var l = route.replace(":3000/", ":30100/")
    return l;
  }
  return location.port;
}

export function copyToClipboard(this: any, e) {
  console.log('copy to clipboard => ', e.target.innerText);
  var text = e.target.innerText;
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  (this as any).$root.$emit('global.copyclipboard', text)
}

export function isMobile() {
  const toMatch = [
    /Mobile/i,
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];
  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem)
  })
}
