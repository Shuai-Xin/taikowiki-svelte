import type { LangFile } from "../types";

const ja: LangFile = {
    layout: {
        main: {
            song: '曲',
            doc: '文書',
            newSong: '新曲',
            diffchart: '難易度表',
            dani: '段位道場'
        },
        'dedicated diffchart': {
            type: {
                clear: 'クリア',
                fc: 'フルコンボ',
                dfc: '全良'
            }
        }
    },
    component: {
        SongEditor: {
            difficulties: {
                easy: 'かんたん',
                normal: 'ふつう',
                hard: 'むずかしい',
                oni: 'おに',
                ura: 'おに(裏)'
            }
        },
        DaniDisplay: {
            type: {
                "gauge": "魂ゲージ",
                "combo": "コンボ数",
                "score": "スコアー",
                "roll": "連打数",
                "hit": "たたいた数",
                "good": "良の数",
                "ok": "可の数",
                "bad": "不可の数"
            },
            suffix1: {
                percent: "%",
                times: "回",
                point: "点",
                count: "個"
            },
            suffix2: {
                up: '以上',
                down: '未満'
            }
        }
    },
    other: {
        title: {
            base: '太鼓の達人 ウィキ'
        },
        dani: {
            dan: {
                "senpo": "先鋒",
                "jiho": "次鋒",
                "chiuken": "中堅",
                "fukusho": "副将",
                "taisho": "大将",
                "beginner": "初級",
                "10kyu": "十級",
                "9kyu": "九級",
                "8kyu": "八級",
                "7kyu": "七級",
                "6kyu": "六級",
                '5kyu': '五級',
                '4kyu': '四級',
                '3kyu': '三級',
                '2kyu': '二級',
                '1kyu': '一級',
                '1dan': '初段',
                '2dan': '二段',
                '3dan': '三段',
                '4dan': '四段',
                '5dan': '五段',
                '6dan': '六段',
                '7dan': '七段',
                '8dan': '八段',
                '9dan': '九段',
                '10dan': '十段',
                'kuroto': '玄人',
                'meijin': '名人',
                'chojin': '超人',
                'tatsujin': '達人'
            },
            version: {
                'katsudon': 'K-D',
                'sorairo': 'ソライロ',
                'momoiro': 'モモイロ',
                'kimidori': 'キミドリ',
                'murasaki': 'ムラサキ',
                'white': 'ホワイト',
                'red': 'レッド',
                'yellow': 'イエロー',
                'blue': 'ブルー',
                'green': 'グリーン',
                '20': 'ニジイロ 2020',
                '21': 'ニジイロ 2021',
                '22': 'ニジイロ 2022',
                '23': 'ニジイロ 2023',
                '24': 'ニジイロ 2024'
            }
        }
    },
    '/auth/user': {
        'error': {
            'New nickname is not in the correct format': '有効な名前の形式ではありません',
            'Duplicated Nickname': 'この名前はすでに使用中です'
        }
    },
    '/song': {
        placeholder: 'キーワード',
        difficulty: '難易度',
        easy: 'かんたん',
        normal: 'ふつう',
        hard: 'むずかしい',
        oni: 'おに',
        omote: 'おに(表)',
        ura: 'おに(裏)',
        genre: 'ジャンル',
        genres: {
            pops: 'ポップス',
            anime: 'アニメ',
            kids: 'キッズ',
            vocaloid: 'ボーカロイド',
            game: 'ゲームミュージック',
            namco: 'ナムコオリジナル',
            variety: 'バラエティ',
            classic: 'クラシック'
        },
        languages: {
            jp: '日本語',
            ko: '韓国語',
            ako: '韓国語(非公式)'
        }
    },
    '/song/[songNo]': {
        genres: {
            pops: 'ポップス',
            anime: 'アニメ',
            kids: 'キッズ',
            vocaloid: 'ボーカロイド',
            game: 'ゲームミュージック',
            namco: 'ナムコオリジナル',
            variety: 'バラエティ',
            classic: 'クラシック'
        }
    },
    '/song/add': {
        genres: {
            pops: 'ポップス',
            anime: 'アニメ',
            kids: 'キッズ',
            vocaloid: 'ボーカロイド',
            game: 'ゲームミュージック',
            namco: 'ナムコオリジナル',
            variety: 'バラエティ',
            classic: 'クラシック'
        }
    },
    '/diffchart': {
        type: {
            clear: 'クリア',
            fc: 'フルコンボ',
            dfc: '全良'
        },
        download: "ダウンロード",
        go: "移動"
    },
    '/diffchart/clear/[level]': {
        '10 level clear': '★10 クリア難易度表',
        '9 level clear': '★9 クリア難易度表',
        '8 level clear': '★8 クリア難易度表',
        '7 level clear': '★7 クリア難易度表',
        '6 level clear': '★6 クリア難易度表',
        sections: {
            'SSS': 'SSS',
            'SS': 'SS',
            'S': 'S',
            'A': 'A',
            'B': 'B',
            'C': 'C',
            'D': 'D',
            'E': 'E',
            'F': 'F',
            'X': '個人差'
        },
        subname: "🔴 個人差デカい&nbsp;&nbsp;&nbsp;🟢 初見注意&nbsp;&nbsp;&nbsp;🟣 クリアに比べてフルコンボむずい"
    }
}

export default ja;
