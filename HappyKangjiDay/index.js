var num = 1; //현재 문제 번호를 저장할 변수
var score = 0; // 점수를 저장할 변수
var q = {
  1: {
    "title": "오늘은 송요셉이랑 친구하고 몇 번째 생일?",
    "img5": "static/img/q1.jpg",
    "A": "5번째",
    "B": "6번째",
    "C": "7번째",
    "correct": "A"
  },
  2: {
    "title": "강민지가 송요셉에게 처음으로 건냈던 말은?",
    "img5": "static/img/q2-2.jpg",
    "A": "안녕? ٩(๑• ₃ -๑)۶♥ 나는 이웃나라에서온 민디공듀라고 해",
    "B": "너 이런 애랑 어떻게 같이 살아?",
    "C": "뭘 꼬라봐",
    "correct": "C"
  },
  3: {
    "title": "내가 처음으로 준 생일선물은?",
    "img5": "static/img/q3.jpg",
    "A": "셔츠",
    "B": "소원팔찌",
    "C": "손편지",
    "correct": "B"
  },
  4: {
    "title": "따로 같이 밥 먹은 횟수는? (하루에 점심저녁 먹은 건 한 번으로)",
    "img5": "static/img/q4.jpg",
    "A": "5번",
    "B": "6번",
    "C": "7번",
    "correct": "C"
  },
  5: {
    "title": "같이 본 영화가 아닌 것은?",
    "img5": "static/img/q5.jpg",
    "A": "인어(?)공주(?)",
    "B": "신과함께-죄와 벌",
    "C": "명탐정 코난: 흑철의 어영",
    "correct": "B"
  },
  6: {
    "title": "다음 중 가장 오래된 페메 별명은?",
    "img5": "static/img/q6.jpg",
    "A": "김치세젤예",
    "B": "아이유",
    "C": "The General Majestry of Chair King...",
    "correct": "B"
  },
  7: {
    "title": "다음 중 송요셉의 최애는?",
    "img5": "static/img/fromis9.jpg",
    "A": "장규리",
    "B": "이채영",
    "C": "박지원",
    "correct": "A"
  },
  8: {
    "title": "서른되기 전에는 민지가 내 최애처럼 예쁜 언니 소개시켜주겠지?",
    "img5": "static/img/ql.png",
    "A": "당연하지 나만 믿어 약속함 ㅇㅇ",
    "B": "허, 날 뭐로 보고. 언니만 믿으라구~~~",
    "C": "이 누나가 책임지고 납치해올게 걱정마^^",
    "correct": "C"
  },
  9: {
    "title": "문제9",
    "img5": "static/img/White.png",
    "A": "선택지1",
    "B": "선택지2",
    "C": "선택지3",
    "correct": "any"
  }
}
var result = {
  "ISTJ": {
    "character": "ISTJ",
    "mbti": "편지내용",
    "img1": "static/img/istj.png"
  }
}

function start() {
  $(".start").hide();
  $(".question").show();
  next();
}

$("#A, #B, #C").click(function() {
  var choice = $(this).attr('id');

  if (q[num].correct === "any" || choice === q[num].correct) {
    score += 12.5;
  }

  next();
});


function next() {
  if (num == Object.keys(q).length) {
    if (score >= 70) {
      $(".question").hide();
      $(".result").show();
      showResult("", "static/img/교환권.png", "static/img/편지.png", score);
    } else {
      $(".question").hide();
      $(".retry").show();
      showRetry("너는 그냥 선물받을 자격이없다.", "static/img/retry.jpg", score);
    }
  } else {
    $("#img5").attr("src", q[num]["img5"]);
    $(".progress-bar").attr('style', 'width: calc(100/' + Object.keys(q).length + '*' + num + '%)');
    $("#title").html(q[num]["title"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    $("#C").html(q[num]["C"]);
    num++;
  }
}


function showResult(text, imgSrc1, imgSrc2, score) {
  $("#scoreText").html(text + "<br>Score: " + score);
  $("#resultTitle").html("우리 밍디 생일 축하해~");
  $("#resultImage1").attr("src", imgSrc1);
  $("#resultImage2").attr("src", imgSrc2);
}

function showRetry(text, imgSrc1, score) {
  $("#retryTitle").html(score + "점? 미쳤냐?");
  $("#retryText").html(text);
  $("#retryImage").attr("src", imgSrc1);
}



function reload() {
  location.reload();
}