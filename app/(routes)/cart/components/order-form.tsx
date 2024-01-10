"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import Button from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";

const formSchema = z
  .object({
    emailAddress: z.string().email(),
    name: z.string().min(2),
    deliveryOption: z.enum(["pickup", "delivery"]),
    address: z.string().optional(),
    phone: z.string().min(10),
  })
  .refine(
    (data) => {
      if (data.deliveryOption === "delivery") {
        return !!data.address;
      }
      return true;
    },
    {
      message: "Por favor ingrese una dirección de entrega",
      path: ["address"],
    }
  );

interface OrderFormData {
  emailAddress: string;
  name: string;
  deliveryOption: "pickup" | "delivery";
  address?: string;
  phone: string;
}

interface OrderFormProps {
  onSubmit: (values: OrderFormData) => Promise<void>;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      name: "",
      address: "",
      phone: "",
    },
  });

  const deliveryOption = form.watch("deliveryOption");

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit({
      emailAddress: values.emailAddress,
      name: values.name,
      deliveryOption: values.deliveryOption,
      address: values.address,
      phone: values.phone,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-md w-full flex flex-col gap-4"
      >
        <Image
          src="/image/luffilogo-horizontal.svg"
          alt="Luffi-Logo"
          className=" w-40 lg:w-52 pb-6 mx-auto"
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="flex items-center gap-2">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese su email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Nombre Completo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese su nombre completo"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="deliveryOption"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Opcion de Entrega</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione una forma de entrega" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="pickup">Retirar en local</SelectItem>
                    <SelectItem value="delivery">Envio a domicilio</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        {deliveryOption === "delivery" && (
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Direccion de Entrega</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingrese su direccion" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        )}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Telefono</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese su numero de telefono"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </form>
    </Form>
  );
};

export default OrderForm;
