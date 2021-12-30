// import A from '../../Picture/A.png'
// import AA from '../../Picture/b0.png'
import a from '../../Picture/b1.png'
import aa from '../../Picture/b2.png'
import bb from '../../Picture/b3.png'
import b from '../../Picture/b4.png'
import ab from '../../Picture/b5.png'
import abb from '../../Picture/b6.png'
import oo from '../../Picture/b7.png'
import o from '../../Picture/b8.png'

export const BloodImage = [
    {
        id: '1',
        name: 'A+',
        img: a,
        specility: 'The A-Listers',
        blood: [
            [
                { name: 'Packed Red Blood Cell ( A+ )' },
                {unit: 4}
            ],
            [
                { name: 'Whole BLood ( A+ )' },
                {unit: 4}
            ]
        ],
        descrition: 'A Positive are one of the biggest groups! They are considered the "Platelet Protectors".',
        ava: "3",
    },
    {
        id: '2',
        name: 'A-',
        img: aa,
        specility: 'The Comforter',
        blood: [
            [
                { name: 'Packed Red Blood Cell ( A- )' },
                {unit: 3}
            ],
            [
                { name: 'Whole BLood ( A- )' },
                {unit: 9}
            ]
        ],
        ava: "3",
        descrition: 'A Nagetive are powerfull because they help those in surgery or those who would need a red cell transfusion!'
    },
    {
        id: '3',
        name: 'B+',
        img: b,
        blood: [
            [
                { name: 'Packed Red Blood Cell ( B+ )' },
                {unit: 1}
            ],
            [
                { name: 'Whole BLood ( B+ )' },
                {unit: 2}
            ]
        ],
        specility: 'The Bright Ones',
        descrition: `B Positive always look on the bright side and it's not just in the name!`
    },
    {
        id: '4',
        name: 'B-',
        ava: "3",
        img: bb,
        blood: [
            [
                { name: 'Packed Red Blood Cell ( B- )' },
                {unit: 7}
            ],
            [
                { name: 'Whole BLood ( B- )' },
                {unit: 9}
            ]
        ],
        specility: `The Bee's Knees`,

        descrition: `B Nagetive are very unique! Very few peopelhave this type, so it's usually high in demand!`,
    },
    {
        id: '5',
        name: 'AB+',
        img: ab,
        ava: "3",
        specility: `The Lucky Ones`,
        blood: [
            [
                { name: 'Packed Red Blood Cell ( AB+ )' },
                {unit: 7}
            ],
            [
                { name: 'Whole BLood ( AB+ )' },
                {unit: 2}
            ]
        ],
        descrition: `AB Positive are the Lucky Ones! They are considered the "Universal Recipients".`
    },
    {
        id: '6',
        name: 'AB-',
        img: abb,
        ava: "3",
        specility: `The Rare One`,
        blood: [
            [
                { name: 'Packed Red Blood Cell ( AB- )' },
                {unit: 1}
            ],
            [
                { name: 'Whole BLood ( AB- )' },
                {unit: 6}
            ]
        ],

        descrition: `AB Nagetive are the most rare blood type in the world. You are also known as "Universal Plasma Donor".`
    },
    {
        id: '7',
        name: 'O+',
        img: o,
        ava: "3",
        specility: `The Secret Saver`,
        blood: [
            [
                { name: 'Packed Red Blood Cell ( O+ )' },
                {unit: 3}
            ],
            [
                { name: 'Whole BLood ( O+ )' },
                {unit: 4}
            ]
        ],
        descrition: `O Positive are versatile because they are used for trauma, air medical services, and ambulance emergencies.`,
    },
    {
        id: '8',
        name: 'O-',
        // trans: trans,
        img: oo,
        ava: "3",
        specility: 'The Ulimite Giver',
        blood: [
            [
                { name: 'Packed Red Blood Cell ( O- )' },
                {unit: 4}
            ],
            [
                { name: 'Whole BLood ( O- )' },
                {unit: 3}
            ]
        ],

        descrition: `O Negative are extraordinary! They are considered the "Universal Blood Type".`,
    }
]

