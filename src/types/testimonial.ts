
export interface TestimonialSubmission {
  name: string;
  company?: string;
  message: string;
}

export interface Testimonial extends TestimonialSubmission {
  id: string;
  createdAt: string;
  approved: boolean;
}
