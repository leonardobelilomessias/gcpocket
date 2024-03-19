import { Timestamp } from "firebase/firestore"

export type devotionalType = {
title:string
text:string
create_by_email:string
reference_book?:string
reference_chapter?:string
reference_verse?:string,
book:string
reference:string
type:string
created_at:Timestamp
}