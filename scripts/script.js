

function parse_dictionary () {
  $.csv.toArray("reading_plan/Sample_Bible_Reading_Program.csv");
}



/*

Functionality: Returns the corresponding reaing for the day

*/

/*function reading_for_day(day num) {

}*/


function open_reading(reading) {
    sessionStorage.setItem('reading', reading.getElementsByTagName('p')[0].innerHTML);
    //console.log(reading.getElementsByTagName('p')[0].innerHTML);
    console.log(reading);
    //parse_dictionary();
    var date = new Date();

    var month_compensation = 0; // compensate for number of days before month (0 indexed)

    var curr_month = parseInt(date.getMonth());
    var curr_year = parseInt(date.getFullYear());
    switch (curr_month) {

      /*cases are in descending order without breaks so that on a given month all
      previous months are taken into account*/
      case 11:
        month_compensation += 30
      case 10:
        month_compensation += 31
      case 9:
        month_compensation += 30

      case 8:
        month_compensation += 31

      case 7:
        month_compensation += 31

      case 6:
        month_compensation += 30

      case 5:
        month_compensation += 31


      case 4:
        month_compensation += 30

      case 3:
        month_compensation += 31


      case 2:

        month_compensation += 28;//if leap year nead to add a year

        /*checking for leap year*/
        if(is_leap_year(curr_year)) {
          month_compensation += 1;
        }

      case 1:
        month_compensation += 31;


      case 0:

        break;
      default:
        break;

    }
    var corresponding_day = date.getDate()-parseInt(reading.id)+month_compensation;
    window.location.href = "reading_plan/"+corresponding_day+".html";
    // parse_dictionary();
    //window.location.href='reading_plan/todays_reading.html';
}

function is_leap_year(curr_year) {
  if(curr_year%4 == 0) {
    if(curr_year%100 == 0 &&
      curr_year%400 != 0) { //year divisible by 100 but not 400
      return false;
    }
    else {
      return true;
    }
  }
  return false;
}

function open_chapter(n, book_name) {
    sessionStorage.setItem('chapter_number', n);
    window.location = book_name;
}

function navbar_scroll_offset() {
    window.scrollBy(0, -80);
}
window.onload = navbar_scroll_offset;

function go_back_page() {
    window.history.back();
}

document.addEventListener('swiped-left', function(e) {
    window.history.back();
});


function get_full_book_name(short_book_title) {
    switch (short_book_title) {
      case "Gen":
        return "Genesis";
        break;
      case "Exo":
        return "Exodus";
        break;
      case "Lev":
        return "Leviticus";
        break;
      case "Num":
        return "Numbers";
        break;
      case "Deut":
        return "Deuteronomy";
        break;
      case "Josh":
        return "Joshua";
        break;
      case "Judg":
        return "Judges";
        break;
      case "Ruth":
        return "Ruth";
        break;
      case "1 Sam":
        return "1 Samuel";
        break;
      case "2 Sam":
        return "2 Samuel";
        break;
      case "1 Kings":
        return "1 Kings";
        break;
      case "2 Kings":
        return "2 Kings";
        break;
      case "1 Chr":
        return "1 Chronicles";
        break;
      case "2 Chr":
        return "2 Chronicles";
        break;
      case "Ezra":
        return "Ezra";
        break;
      case "Neh":
        return "Nehemiah";
        break;
      case "Esth":
        return "Esther";
        break;
      case "Job":
        return "Job";
        break;
      case "Psa":
        return "Psalms";
        break;
      case "Prov":
        return "Proverbs";
        break;
      case "Eccl":
        return "Ecclesiastes";
        break;
      case "SS":
        return "Song of Songs";
        break;
      case "Isa":
        return "Isaiah";
        break;
      case "Jer":
        return "Jeremiah";
        break;
      case "Lam":
        return "Lamentations";
        break;
      case "Ezek":
        return "Ezekiel";
        break;
      case "Dan":
        return "Daniel";
        break;
      case "Hosea":
        return "Hosea";
        break;
      case "Joel":
        return "Joel";
        break;
      case "Amos":
        return "Amos";
        break;
      case "Obad":
        return "Obadiah";
        break;
      case "Jonah":
        return "Jonah";
        break;
      case "Micah":
        return "Micah";
        break;
      case "Nahum":
        return "Nahum";
        break;
      case "Hab":
        return "Habakkuk";
        break;
      case "Zeph":
        return "Zephaniah";
        break;
      case "Hag":
        return "Haggai";
        break;
      case "Zech":
        return "Zechariah";
        break;
      case "Mal":
        return "Malachi";
        break;
      case "Matt":
        return "Matthew";
        break;
      case "Mark":
        return "Mark";
        break;
      case "Luke":
        return "Luke";
        break;
      case "John":
        return "John";
        break;
      case "Acts":
        return "Acts";
        break;
      case "Rom":
        return "Romans";
        break;
      case "1 Cor":
        return "1 Corinthians";
        break;
      case "2 Cor":
        return "2 Corinthians";
        break;
      case "Gal":
        return "Galatians";
        break;
      case "Eph":
        return "Ephesians";
        break;
      case "Phil":
        return "Philippians";
        break;
      case "Col":
        return "Colossians";
        break;
      case "1 Thes":
        return "1 Thessalonians";
        break;
      case "2 Thes":
        return "2 Thessalonians";
        break;
      case "1 Tim":
        return "1 Timothy";
        break;
      case "2 Tim":
        return "2 Timothy";
        break;
      case "Titus":
        return "Titus";
        break;
      case "Philem":
        return "Philemon";
        break;
      case "Heb":
        return "Hebrews";
        break;
      case "James":
        return "James";
        break;
      case "1 Pet":
        return "1 Peter";
        break;
      case "2 Pet":
        return "2 Peter";
        break;
      case "1 John":
        return "1 John";
        break;
      case "2 John":
        return "2 John";
        break;
      case "3 John":
        return "3 John";
        break;
      case "Jude":
        return "Jude";
        break;
      case "Rev":
        return "Revelation";
        break;
      default:
        return short_book_title;
    }
    return short_book_title;
}
