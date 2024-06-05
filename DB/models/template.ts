import mongoose, { Schema, Document,Model } from 'mongoose';

interface HeaderComponent {
  title: string;
  logo: string;
  loginButton: boolean;
}

interface MainComponent {
  text: string;
  description: string;
  imageUrl: string;
}

interface FooterComponent {
  text: string;
}

interface Components {
  header: HeaderComponent;
  main: MainComponent;
  footer: FooterComponent;
}

interface TemplateDocument extends Document {
  type: string;
  baseColor: string;
  components: Components;
}

const headerSchema = new Schema<HeaderComponent>({
  title: { type: String, required: true },
  logo: { type: String, required: true },
  loginButton: { type: Boolean, required: true }
});

const mainSchema = new Schema<MainComponent>({
  text: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const footerSchema = new Schema<FooterComponent>({
  text: { type: String, required: true }
});

const componentsSchema = new Schema<Components>({
  header: { type: headerSchema, required: true },
  main: { type: mainSchema, required: true },
  footer: { type: footerSchema, required: true }
});

const templateSchema = new Schema<TemplateDocument>({
  type: { type: String, required: true },
  baseColor: { type: String, required: true },
  components: { type: componentsSchema, required: true }
});

const Template: Model<TemplateDocument> = mongoose.models.Template || mongoose.model<TemplateDocument>('Template', templateSchema);

export default Template;


