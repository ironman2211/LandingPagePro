import { connect } from "../../../DB/mongodb";
import Template from "../../../DB/models/template";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { type, baseColor, components } = await req.json();
    const template = new Template({
      type: type,
      baseColor: baseColor,
      components: components,
    });

    const savedTemplate = await template.save();
    return NextResponse.json({
      status: 200,
      message: "template savedc successfully",
      successful: true,
      savedTemplate,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function GET() {
  try {
    await connect();
    const templates = await Template.find({});
    return NextResponse.json({
      status: 200,
      message: "Templates fetched successfully",
      successful: true,
      templates,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await connect();
    const { _id, type, baseColor, components } = await req.json();
    
    const updatedTemplate = await Template.findByIdAndUpdate(
      _id,
      { type, baseColor, components },
      { new: true }
    );
    if (!updatedTemplate) {
      return NextResponse.json({
        status: 404,
        message: "Template not found",
        successful: false,
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Template updated successfully",
      successful: true,
      updatedTemplate,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connect();
    const { id } = await req.json();
    const deletedTemplate = await Template.findByIdAndDelete(id);
    if (!deletedTemplate) {
      return NextResponse.json({
        status: 404,
        message: "Template not found",
        successful: false,
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Template deleted successfully",
      successful: true,
      deletedTemplate,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}