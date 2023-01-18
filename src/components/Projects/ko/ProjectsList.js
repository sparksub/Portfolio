import vr from "../../../Assets/Projects/vr.png"
import pillumi from "../../../Assets/Projects/pillumi.png"
import seesik from "../../../Assets/Projects/seesik.png"
import surf from "../../../Assets/Projects/surf.png"
import sv from "../../../Assets/Projects/sv.png"
import streaming from "../../../Assets/Projects/streaming.png"
import c2c from "../../../Assets/Projects/c2c.png"
import smb from "../../../Assets/Projects/smb.png"

export default [
    {
        title: "Educational VR for OA",
        imgPath: vr,
        description: "노인을 위한 화재 대피 훈련 VR 컨텐츠를 제안합니다. VR 환경에서 노인들이 어떻게 행동하고, VR 환경을 인식하는지 청년들과 비교하여 분석했습니다. 결과적으로, 본 연구에서 노인들을 위한 교육용 자료로써 VR의 사용 가능성을 발견하고 디자인 기회를 제시했습니다. 제 1저자로서 연구를 이끌었고, VR 컨텐츠 개발 이외의 모든 연구에 참여했습니다.",
        isLink1: "paper",
        link1: "https://link.springer.com/article/10.1007/s10209-022-00878-8",
        isLink2: "paper",
        link2: "https://dl.acm.org/doi/abs/10.1145/3359996.3364788"
    },
    {
        title: "mHealth: Pillumi",
        imgPath: pillumi,
        description: "포장지와 설명서 없이 알약을 구분하는 것은 어렵습니다. 이를 해결하기 위해, 한국 식약처에 등록된 2500여종의 알약을 대상으로 계층적 구조의 이미지 인식 모델을 적용한 알약 사진 검색 앱을 개발했습니다. 저는 Flutter를 사용해 cross platform 앱을 개발했습니다.",
        isLink1: "github",
        link1: "https://github.com/sparksub/pillumi-khu",
        isLink2: "",
        link2: ""
    },
    {
        title: "mHealth: Seesik",
        imgPath: seesik,
        description: "만성질환을 가진 노인들은 무엇을, 언제, 얼마나 먹었는지 정확히 기록해야 합니다. 이 과정을 돕기 위해, 우리는 노인을 위한 AI 기반 음식 기록 및 신선도 측정 앱을 제안합니다. LiDAR 센서를 활용해서 음식 부피를 계산하고 섭취한 음식의 영양소를 분석합니다. 팀장으로 프로젝트를 이끌었고, iPad 앱 및 LiDAR 센서를 사용한 음식 부피 측정 기능을 개발했습니다.",
        isLink1: "video",
        link1: "https://www.youtube.com/watch?v=2KL2ZVbdMrA",
        isLink2: "",
        link2: ""
    },
    {
        title: "Surf",
        imgPath: surf,
        description: "과거에도 인터넷 강의처럼 비대면 수업은 존재했지만, 우리는 코로나19로 인해 전면 비대면 수업을 처음 경험해보았습니다. 이로 인해, 강의자와 학생의 소통이 어렵다는 비대면 수업의 문제를 뼈저리게 느꼈습니다. 이를 해결하기 위해, 강의자와 학생 사이의 거리를 좁혀줄 수 있는 Surf를 제안합니다. 저는 React를 사용해 웹 서비스를 개발했습니다.",
        isLink1: "video",
        link1: "https://youtu.be/6Ih8yFu74gQ",
        isLink2: "github",
        link2: "https://github.com/FacerAin/2020-SW-Festival-PSY"
    },
    {
        title: "Redesigning Experiences of Student Volunteer Program",
        imgPath: sv,
        description: "학술회의를 위해 봉사하는 student volunteers (SV)와 student volunteer chairs (SVC)를 공감하기 위해, 15명의 SV와 12명의 SVC에 대한 인터뷰 연구를 보고합니다. Open coding을 사용해 인터뷰 결과를 분석하여, SV와 SVC가 서로 소통할 때의 행동과 인식을 파악할 수 있었습니다. 제 1저자로서 연구를 이끌었습니다.",
        isLink1: "paper",
        link1: "https://dl.acm.org/doi/abs/10.1145/3479599",
        isLink2: "",
        link2: ""
    },
    {
        title: "Toward accessible Live Streaming Platform",
        imgPath: streaming,
        description: "14명의 시각장애를 가진 스트리머(SVI)와 semi-structured interview를 진행하여, SVI가 라이브 방송을 할 때 겪는 독특한 상호작용과 어려움을 찾았습니다. 또한 SVI를 도울 수 있는 라이브 방송 플랫폼의 디자인 기회를 제시합니다. 본 연구에서, affinity diagram을 사용해서 인터뷰 결과를 분석하고, 디자인 기회를 설계했습니다.",
        isLink1: "paper",
        link1: "https://dl.acm.org/doi/abs/10.1145/3476038",
        isLink2: "",
        link2: ""
    },
    {
        title: "Toward Accessible C2C Market",
        imgPath: c2c,
        description: "코로나19로 인해 C2C 시장이 더욱 확대되면서, 노인들 역시 새로운 소비자 층으로 주목 받게 되었습니다. 우리는 물건을 판매하는 노인을 돕기 위해 rule-based chatbot을 개발했습니다. 우리는 노인들이 구매자 뿐만 아니라 판매자로서도 활발히 활동할 수 있길 기대랍니다. 본 연구는 Mercari R4D internship project로 진행되었습니다. 또한 저는 연구를 제안하고 이끌었으며, iOS 앱을 개발했습니다.",
        isLink1: "",
        link1: "",
        isLink2: "",
        link2: ""
    },
    {
        title: "Toward Accessible Daily Living",
        imgPath: smb,
        description: "서울 시내의 버스를 탑승하는 시각장애인(PVI)이 겪고 있는 접근성 문제는 아직 잘 알려지지 않았습니다. 본 연구에서는, 9명의 PVI와 semi-structured interview를 진행해서 그들이 겪는 어려움에 공감하고 새로운 접근성 개선 기회를 발견했습니다. 제 1저자로서 연구를 이끌었습니다.",
        isLink1: "paper",
        link1: "https://dl.acm.org/doi/abs/10.1145/3391203.3391209",
        isLink2: "",
        link2: ""
    },
]
