'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
// import postgres from 'postgres';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

// import { z } from 'zod';

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
// const FormSchema = z.object({
//   id: z.string(),
//   customerId: z.string(),
//   amount: z.coerce.number(),
//   status: z.enum(['pending', 'paid']),
//   date: z.string(),
// });
 
// const CreateInvoice = FormSchema.omit({ id: true, date: true });

// test - create a new invoice - no db
export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
  console.log(typeof rawFormData.amount);
}
 
// export async function createInvoice(formData: FormData) {
//   const { customerId, amount, status } = CreateInvoice.parse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });
//   // Test it out:
//   const amountInCents = amount * 100;
//   const date = new Date().toISOString().split('T')[0];
 
//   await sql`
//     INSERT INTO invoices (customer_id, amount, status, date)
//     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
//   `;

//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');
// }
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}