
/**
 * Note: you must reload your window after each file change for it to take into
 * effect. We are working to improve this behavior.
 */
module.exports = {
  /**
   * Specify behavior to modify the name of the note. If
   * promptUserForModification is true, the modified name will appear in a
   * lookup control to allow the user to further edit the note name before
   * confirming.
   */
  OnWillCreate: {
    setNameModifier(props) {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();
      const fullDateWithDots = `${yyyy}.${mm}.${dd}`
      const namePath = ["daily", "public", fullDateWithDots];
      return {
        name: namePath.join('.'),
      };
    }
  },
  /**
   * Specify behavior for altering the title of the note when it is created.
   */
  OnCreate: {
    setTitle(props) {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();
      const fullDateWithDash = `${yyyy}-${mm}-${dd}`
      return fullDateWithDash;
    }
  }
}
