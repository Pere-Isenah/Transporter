import {NextResponse} from "next/server"

export async function name(response:any) {
    return NextResponse.json({data:"test"})
    
} 