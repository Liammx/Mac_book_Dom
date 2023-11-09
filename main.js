let buttonfirst = document.querySelector('.buttonfirst')
let buttonsecond = document.querySelector('.buttonsecond')
let img = document.querySelector('img')
let item = document.querySelector('.item')
let h1 = document.querySelector('.h1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let item4 = document.querySelector('.item4')
let p2 = document.querySelector('.p2')
let W = document.querySelector('.W')

let src = 'https://s3-alpha-sig.figma.com/img/9581/edda/696f087203dbc41896f9d180cf9d0435?Expires=1700438400&Signature=jXDlR0sQ6wIGjNdF5zoIV43RnIiMrFSX99z4tw23ZfoBvejTEsaDp73Ufo3V4C2qf8-B7UqWxgqdsKLFWIsbWUtqWNvzzHs-pRyGCuOd4TUC10XrR4nqAJKqrE2ex4zN4U25lBOu0vpzv8HAXLDRcqwaby5GNu3ntJtzSZcSB8KAtKonHre4hrYVhogaDYdHb~-lK0hDTrF-U~Z1mi9AOoKmWN~Vhj4f67rgOl3RzRbSEy2JvbmqDXdsLoNLvhd~VcnpBYq9nflfPK3hr99h7kebEYrUnB8SGGYIG4qMAasyKF7BeJidmpHYHXnxPItTzP3tyPf7-JIxWwSIo45f~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
let src1 = 'https://s3-alpha-sig.figma.com/img/9f71/2fbe/77eca8b2420bb1d5e95728168d6e6c92?Expires=1700438400&Signature=g8wqULAjc4YYumwb6oNxDKpbL1MmpL91ZGnfS3yZFU1v03YiKLSs~1zQCBcWLLgLhzoOlATuWze~XWCFjUqDrqcqSCwAdqN5-5UFaZwbSU0mX~mIkAcPTCPRyn-i-s6hAJpsi3jDc722BKzhyWj-w9YrGKmfmCuNjoxo61XD0v9SZbr40RuUJITK20b--WqhYii1IovtKFlkZDyGzS-O3oBmai85WxcfZEXWW3V1CFs6UckigswyKiEkbSvfMut1vNuvhWH7paIPtPgM7vLT4Tnm5bLJ2vU8yy77WAivzyTS42qbHScSZ3Nert4zRHvi7NKFnpkoKJs2aWCKg3Ixtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

buttonsecond.addEventListener('click', () => {
    buttonsecond.style.background = '#0071E3'
    buttonfirst.style.background = '#CFE7FF'
    img.setAttribute('src', src)
    p2.style.color = '#fff'
    W.innerHTML = 'Space Gray'
})

buttonfirst.addEventListener('click', () =>{
    buttonfirst.style.background = '#0071E3'
    buttonsecond.style.background = '#CFE7FF'
    img.setAttribute('src', src1)
    p2.style.color = '#797979'
    W.innerHTML = 'White'
})

item.addEventListener('click', () => {
    h1.innerHTML = '$1,999'
    item.style.borderColor = '#007FFF'
    item2.style.borderColor = '#CFE7FF'
    item3.style.borderColor = '#CFE7FF'
    item4.style.borderColor = '#CFE7FF'
})

item2.addEventListener('click', () => {
    h1.innerHTML = '$2,199'
    item2.style.borderColor = '#007FFF'
    item.style.borderColor = '#CFE7FF'
    item3.style.borderColor = '#CFE7FF'
    item4.style.borderColor = '#CFE7FF'
})

item3.addEventListener('click', () => {
    h1.innerHTML = '$2,599'
    item3.style.borderColor = '#007FFF'
    item.style.borderColor = '#CFE7FF'
    item2.style.borderColor = '#CFE7FF'
    item4.style.borderColor = '#CFE7FF'
})
item4.addEventListener('click', () => {
    h1.innerHTML = '$3,199'
    item4.style.borderColor = '#007FFF'
    item.style.borderColor = '#CFE7FF'
    item2.style.borderColor = '#CFE7FF'
    item3.style.borderColor = '#CFE7FF'
})